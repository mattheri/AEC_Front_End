(() => {
    const trigger = document.querySelector(".nav_mobile--trigger");
    trigger.addEventListener("click", () => {
        trigger.classList.toggle("open");
        if (!trigger.classList.contains("open") || trigger.classList.contains("close")) {
            trigger.classList.toggle("close");
        }
    })
})()