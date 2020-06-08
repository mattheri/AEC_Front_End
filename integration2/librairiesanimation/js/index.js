"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var blockReveal_1 = __importDefault(require("./blockReveal/blockReveal"));
var rellax_1 = __importDefault(require("rellax"));
var animejs_1 = __importDefault(require("animejs"));
var basicLightbox = __importStar(require("basiclightbox"));
var header = document.querySelector("header");
var headerDimensions = header === null || header === void 0 ? void 0 : header.getBoundingClientRect();
var revealTitle = document.querySelector("#reveal-title");
var revealSubtitle = document.querySelector("#reveal-subtitle");
var revealCtaImage = document.querySelector("#reveal-cta-image");
var rellax = new rellax_1.default("#header-bg-img", {
    speed: 2,
});
var titleReveal = new blockReveal_1.default(revealTitle, {
    hidden: true,
    settings: {
        delay: 500,
        bgColor: "#8b2323",
        direction: "rl",
        onComplete: function () {
            var newlement = document.createElement("a");
            newlement.innerText = "watch the trailer";
            newlement.style.fontSize = "10rem";
            newlement.style.textDecoration = "none";
            newlement.style.color = "#1c1c1c";
            newlement.style.cursor = "pointer";
            newlement.classList.add("trailer-link");
            var text = {
                prop1: newlement
            };
            var settings = {
                targets: text,
                prop1: newlement,
                duration: 200,
                easing: "easeInOutExpo",
                round: 1,
                delay: 2000,
                complete: function () {
                    var _a;
                    (_a = document.querySelector(".block_content")) === null || _a === void 0 ? void 0 : _a.remove();
                    revealTitle.appendChild(newlement);
                    revealTitle.classList.add("trailer-link");
                    newlement.onclick = function () {
                        basicLightbox.create("<iframe width=" + (headerDimensions === null || headerDimensions === void 0 ? void 0 : headerDimensions.width) + " height=" + (headerDimensions === null || headerDimensions === void 0 ? void 0 : headerDimensions.height) + " src=\"https://www.youtube.com/embed/Xithigfg7dA\" frameborder=\"0\" allowfullscreen></iframe>").show();
                    };
                }
            };
            animejs_1.default(settings);
            return true;
        }
    }
});
var subtitleReveal = new blockReveal_1.default(revealSubtitle, {
    hidden: true,
    settings: {
        delay: 500,
        bgColor: "#1c1c1c"
    }
});
var ctaImageReveal = new blockReveal_1.default(revealCtaImage, {
    hidden: true,
    settings: {
        bgColor: "#8b2323",
        direction: "bt"
    }
});
function observeElement(element, options) {
    var intersectionCounter = "forwards";
    if (options === null || options === void 0 ? void 0 : options.run) {
        intersectionCounter = options.run;
    }
    if (intersectionCounter === "forwards") {
        intersectionCounter = 0;
    }
    ;
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                if (typeof (options === null || options === void 0 ? void 0 : options.callback) === "object") {
                    if (intersectionCounter < 1 || typeof intersectionCounter === "string") {
                        options.callback.reveal();
                        if (typeof intersectionCounter === "number") {
                            intersectionCounter++;
                        }
                    }
                }
                if (typeof (options === null || options === void 0 ? void 0 : options.callback) === "function") {
                    options.callback();
                }
            }
        });
    }, options === null || options === void 0 ? void 0 : options.options);
    observer.observe(element);
}
titleReveal.reveal();
subtitleReveal.reveal();
observeElement(revealCtaImage, {
    callback: ctaImageReveal,
    options: { threshold: 1 }
});
