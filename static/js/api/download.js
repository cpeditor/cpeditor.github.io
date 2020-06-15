function versionCompare(v1, v2) {
    var v1parts = v1.split(".");
    var v2parts = v2.split(".");

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

    for (var i = 0; i < v1parts.length; ++i) {
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
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

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

function fetchReleases() {
    let uri = "https://api.github.com/repos/cpeditor/cpeditor/releases";

    fetch(uri)
        .then((res) => res.json())
        .then((data) => {
            var latestStableVersion = "0.0.0",
                latestStable,
                latestBetaVersion = "0.0.0",
                latestBeta;
            data.forEach((release) => {
                if (release.prerelease) {
                    if (versionCompare(release.tag_name, latestBetaVersion) === 1) {
                        latestBetaVersion = release.tag_name,
                        latestBeta = release;
                    }
                } else {
                    if (versionCompare(release.tag_name, latestStableVersion) === 1) {
                        latestStableVersion = release.tag_name,
                        latestStable = release;
                    }
                }
            });
            var os = getOS();
            latestStable.assets.forEach((asset) => {
                if (asset.name.endsWith(".exe")) {
                    $("#download_windows_stable").attr("href", asset.browser_download_url);
                    if (os === "Windows") {
                        $("#platform-download").html("You probably want to use <a class=\"text-light\" href=\"" + asset.browser_download_url + "\">the latest stable version on Windows</a>.");
                    }
                } else if (asset.name.endsWith(".AppImage")) {
                    $("#download_linux_stable").attr("href", asset.browser_download_url);
                    if (os === "Linux") {
                        $("#platform-download").html("You probably want to use <a class=\"text-light\" href=\"" + asset.browser_download_url + "\">the latest stable version on Linux</a>.");
                    }
                } else if (asset.name.endsWith(".dmg")) {
                    $("#download_macos_stable").attr("href", asset.browser_download_url);
                    if (os === "Mac OS") {
                        $("#platform-download").html("You probably want to use <a class=\"text-light\" href=\"" + asset.browser_download_url + "\">the latest stable version on macOS</a>.");
                    }
                }
            });
            latestBeta.assets.forEach((asset) => {
                if (asset.name.endsWith(".exe")) {
                    $("#download_windows_beta").attr("href", asset.browser_download_url);
                } else if (asset.name.endsWith(".AppImage")) {
                    $("#download_linux_beta").attr("href", asset.browser_download_url);
                } else if (asset.name.endsWith(".dmg")) {
                    $("#download_macos_beta").attr("href", asset.browser_download_url);
                }
            });
        });
}

fetchReleases();
