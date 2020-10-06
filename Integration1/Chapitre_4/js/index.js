+function observeIntersectionMain () {

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                document.querySelector("nav").classList.add("intersecting");
            } else {
                document.querySelector("nav").classList.remove("intersecting");
            }
        });
    }, options);

    const target = document.querySelector("main");

    observer.observe(target);

}()

+function observeIntersectionSection () {

    const cta = document.querySelector(".about-cta-section");

    const options = {
        threshold: 0.33
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log("entry", entry);

            if (entry.isIntersecting) {
                cta.classList.add("cta-intersecting");
            }
        });
    }, options);

    document.querySelectorAll(".main-section").forEach(target => observer.observe(target));
}()

+function parallaxBackground () {

    const rellax = new Rellax(".background-shapes", {
        speed: -3,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    })

}()