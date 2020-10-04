"use strict";

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

const vm = new Vue({
    el: "#app",
    data: {
        os: getOS(),
        downloadURL: "https://github.com/cpeditor/cpeditor/releases/latest",
        assetAvailable: false
    },
    created() {
        Vue.nextTick(() => {
            if ($(".testi_slider").length) {
                $(".testi_slider").owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 2,
                    nav: false,
                    autoplay: true,
                    smartSpeed: 1500,
                    dots: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                    }
                });
            }
        });

        fetch("https://api.github.com/repos/cpeditor/cpeditor/releases/latest")
            .then((res) => res.json())
            .then((data) => {
                let suffix;
                switch (this.os) {
                    case "Windows":
                        suffix = ".exe";
                        break;
                    case "Mac OS":
                        suffix = ".dmg";
                        break;
                    case "Linux":
                        suffix = ".AppImage";
                        break;
                }

                const suitableAsset = data.assets.find((asset) => asset.name.endsWith(suffix));

                if (suitableAsset) {
                    this.downloadURL = suitableAsset.browser_download_url;
                    this.assetAvailable = true;
                }
            });
    }
});
