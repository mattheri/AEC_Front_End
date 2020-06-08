import Reveal from "./blockReveal/blockReveal";
import Rellax from "rellax";
import anime from "animejs";
import * as basicLightbox from "basiclightbox";

const header = document.querySelector("header");
const headerDimensions = header?.getBoundingClientRect();
const revealTitle = document.querySelector("#reveal-title") as HTMLElement;
const revealSubtitle = document.querySelector("#reveal-subtitle") as HTMLElement;
const revealCtaImage = document.querySelector("#reveal-cta-image") as HTMLElement;

const rellax = new Rellax("#header-bg-img", {
    speed: 2,
});

const titleReveal = new Reveal(revealTitle, {
    hidden: true,
    settings: {
        delay: 500,
        bgColor: "#8b2323",
        direction: "rl",
        onComplete: function () {
            const newlement = document.createElement("a") as HTMLElement;
            newlement.innerText = "watch the trailer";
            newlement.style.fontSize = "10rem";
            newlement.style.textDecoration = "none";
            newlement.style.color = "#1c1c1c";
            newlement.style.cursor = "pointer";
            newlement.classList.add("trailer-link");
            const text = {
                prop1: newlement
            }
            const settings = {
                targets: text,
                prop1: newlement,
                duration: 200,
                easing: "easeInOutExpo",
                round: 1,
                delay: 2000,
                complete: function () {
                    document.querySelector(".block_content")?.remove();
                    revealTitle.appendChild(newlement);
                    revealTitle.classList.add("trailer-link");
                    newlement.onclick = () => {
                        basicLightbox.create(
                            `<iframe width=${headerDimensions?.width} height=${headerDimensions?.height} src="https://www.youtube.com/embed/Xithigfg7dA" frameborder="0" allowfullscreen></iframe>`
                        ).show();
                    }
                }
            };

            anime(settings);
            return true;
        }
    }
});

const subtitleReveal = new Reveal(revealSubtitle, {
    hidden: true,
    settings: {
        delay: 500,
        bgColor: "#1c1c1c"
    }
});

const ctaImageReveal = new Reveal(revealCtaImage, {
    hidden: true,
    settings: {
        bgColor: "#8b2323",
        direction: "bt"
    }
});

function observeElement (element: HTMLElement, options?: {
    callback?: any,
    options?: { [index: string]: any },
    run?: "forwards" | "infinite" | number
}) {
    let intersectionCounter: string | number = "forwards";
    if (options?.run) {
        intersectionCounter = options.run;
    }

    if (intersectionCounter === "forwards") {
        intersectionCounter = 0;
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof options?.callback === "object") {

                    if (intersectionCounter < 1 || typeof intersectionCounter === "string") {
                        options.callback.reveal();
                        if (typeof intersectionCounter === "number") {
                            intersectionCounter++;
                        }
                    }
                }

                if (typeof options?.callback === "function") {
                    options.callback();
                }
            }
        });
    }, options?.options);

    observer.observe(element);
}



titleReveal.reveal();
subtitleReveal.reveal();

observeElement(revealCtaImage, {
    callback: ctaImageReveal,
    options: {threshold: 1}
});