"use strict";

function versionCompare(v1, v2) {
    let v1parts = v1.split(".");
    let v2parts = v2.split(".");

    function isValidPart(x) {
        return (/^\d+$/).test(x);
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
        }
        else if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        else {
            return -1;
        }
    }

    return 0;
}

function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"];
    let os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
    } else if (/Android/.test(userAgent)) {
        os = "Android";
    } else if (/Linux/.test(platform)) {
        os = "Linux";
    }

    return os;
}

$(document).ready(() => {
    const vm = new Vue({
        el: "#app",
        data: {
            userPlatform: "Unknown",
            selectedPlatform: "",
            releases: [],
            selectedAsset: "",
            platformOptions: ["Windows", "Linux", "Mac OS"]
        },
        methods: {
            isAssetSuitableForPlatform(asset, platform = this.userPlatform) {
                const name = asset.name;
                switch (platform) {
                    case "Windows":
                        return name.includes("windows") || name.endsWith("exe");
                    case "Linux":
                        return name.includes("linux") || name.endsWith("AppImage");
                    case "Mac OS":
                        return name.includes("macos") || name.endsWith("dmg");
                    default:
                        return false;
                }
            },
            bestAssetForPlatform(assets, platform) {
                const suitableAssets = assets.filter((asset) => this.isAssetSuitableForPlatform(asset, platform));
                if (suitableAssets.length === 0) {
                    return null;
                } else if (suitableAssets.length === 1) {
                    return suitableAssets[0];
                } else {
                    return suitableAssets.find((asset) => !asset.browser_download_url.includes("portable"));
                }
            }
        },
        computed: {
            latestStableRelease() {
                return this.releases.find(({ prerelease }) => !prerelease);
            },
            latestStableAssetForUserPlatform() {
                if (this.latestStableRelease) {
                    return this.bestAssetForPlatform(this.latestStableRelease.assets, this.userPlatform);
                } else {
                    return null;
                }
            }
        },
        watch: {
            selectedPlatform(platform) {
                if (this.latestStableRelease) {
                    this.selectedAsset = this.bestAssetForPlatform(this.latestStableRelease.assets, platform);
                }
            }
        },
        created() {
            this.userPlatform = getOS();
            if (this.platformOptions.includes(this.userPlatform)) {
                this.selectedPlatform = this.userPlatform;
            } else {
                this.selectedPlatform = this.platformOptions[0];
            }
            $.get("https://api.github.com/repos/cpeditor/cpeditor/releases", { per_page: 10 })
                .then((data) => {
                    this.releases = data;
                    if (this.releases.length > 0) {
                        this.releases.sort((x, y) => versionCompare(x.tag_name, y.tag_name)).reverse();
                        this.selectedAsset = this.bestAssetForPlatform(this.latestStableRelease.assets, this.selectedPlatform);
                    }
                });
        }
    });
});
