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

new Vue({
    el: "#app",
    data: {
        os: getOS(),
        downloadURL: "https://github.com/cpeditor/cpeditor/releases/latest"
    },
    created() {
        fetch("https://api.github.com/repos/cpeditor/cpeditor/releases/latest")
            .then((res) => res.json())
            .then((data) => {
                for (const asset of data.assets) {
                    if (asset.name.endsWith(".exe")) {
                        if (this.os === "Windows") {
                            this.downloadURL = asset.browser_download_url;
                        }
                    } else if (asset.name.endsWith(".dmg")) {
                        if (this.os === "Mac OS") {
                            this.downloadURL = asset.browser_download_url;
                        }
                    } else if (asset.name.endsWith(".AppImage")) {
                        if (this.os === "Linux") {
                            this.downloadURL = asset.browser_download_url;
                        }
                    }
                };
            });
    }
});
