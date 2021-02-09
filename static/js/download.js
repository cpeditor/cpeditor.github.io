"use strict";

function versionCompare(v1, v2) {
  let v1parts = v1.split(".");
  let v2parts = v2.split(".");

  function isValidPart(x) {
    return /^\d+$/.test(x);
  }

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return NaN;
  }

  while (v1parts.length < v2parts.length) {
    v1parts.push("0");
  }

  while (v2parts.length < v1parts.length) {
    v2parts.push("0");
  }

  v1parts = v1parts.map(Number);
  v2parts = v2parts.map(Number);

  for (let i = 0; i < v1parts.length; ++i) {
    if (v1parts[i] === v2parts[i]) {
      continue;
    } else if (v1parts[i] > v2parts[i]) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}

function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "macOS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return "Windows";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else if (/Linux/.test(platform)) {
    return "Linux";
  }

  if (typeof ga === "function") {
    ga(
      "send",
      "event",
      "Unknown Platform",
      window.navigator.platform,
      window.navigator.userAgent
    );
  }

  return null;
}

$(document).ready(() => {
  const vm = new Vue({
    el: "#app",
    data: {
      userPlatform: "Unknown",
      selectedPlatform: "",
      releases: [],
      selectedAsset: null,
      selectedRelease: null,
      platformOptions: ["Windows", "Linux", "macOS"],
    },
    methods: {
      isAssetSuitableForPlatform(asset, platform = this.userPlatform) {
        const name = asset.name;
        switch (platform) {
          case "Windows":
            return name.includes("windows") || name.endsWith("exe");
          case "Linux":
            return name.includes("linux") || name.endsWith("AppImage");
          case "macOS":
            return name.includes("macos") || name.endsWith("dmg");
          default:
            return false;
        }
      },
      bestAssetForPlatform(assets, platform) {
        const suitableAssets = assets.filter((asset) =>
          this.isAssetSuitableForPlatform(asset, platform)
        );
        if (suitableAssets.length === 0) {
          return null;
        } else if (suitableAssets.length === 1) {
          return suitableAssets[0];
        } else {
          switch (platform) {
            case "Windows":
              return suitableAssets.find((asset) =>
                asset.name.endsWith("x64-setup.exe")
              );
            case "Linux":
              return suitableAssets.find((asset) =>
                asset.name.endsWith("AppImage")
              );
            default:
              return suitableAssets.find(
                (asset) => !asset.name.includes("portable")
              );
          }
        }
      },
      chooseBestAsset() {
        if (this.selectedRelease) {
          this.selectedAsset = this.bestAssetForPlatform(
            this.selectedRelease.assets,
            this.selectedPlatform
          );
        }
      },
      latestStableEvent() {
        this.sendGAEvent(
          "latest-stable-link",
          this.latestStableAssetForUserPlatform
        );
      },
      downloadEvent() {
        if (typeof ga !== "function") return;
        this.sendGAEvent("download-button", this.selectedAsset);
        if (this.selectedPlatform !== this.userPlatform) {
          ga(
            "send",
            "event",
            "Download for another platform",
            `download-for-${this.selectedPlatform}-on-${this.userPlatform}`,
            `userAgent: ${window.navigator.userAgent}; platform: ${window.navigator.platform}; asset: ${this.selectedAsset.name}`
          );
        }
      },
      sendGAEvent(action, asset) {
        if (typeof ga !== "function") return;
        ga("send", "event", "Download", action, asset.name);
      },
    },
    computed: {
      latestStableRelease() {
        return this.releases.find(({ prerelease }) => !prerelease);
      },
      latestStableAssetForUserPlatform() {
        if (this.latestStableRelease) {
          return this.bestAssetForPlatform(
            this.latestStableRelease.assets,
            this.userPlatform
          );
        } else {
          return null;
        }
      },
    },
    watch: {
      selectedPlatform() {
        this.chooseBestAsset();
      },
      selectedRelease() {
        this.chooseBestAsset();
      },
    },
    created() {
      this.userPlatform = getOS();
      if (this.platformOptions.includes(this.userPlatform)) {
        this.selectedPlatform = this.userPlatform;
      } else {
        this.selectedPlatform = this.platformOptions[0];
      }
      $.get("https://api.github.com/repos/cpeditor/cpeditor/releases", {
        per_page: 10,
      }).then((data) => {
        this.releases = data;
        if (this.releases.length > 0) {
          this.releases
            .sort((x, y) => versionCompare(x.tag_name, y.tag_name))
            .reverse();
          this.selectedRelease = this.latestStableRelease;
          this.chooseBestAsset();
        }
      });
    },
  });
});
