const searchElement = document.getElementById("search");
const searchedList = document.getElementsByTagName("ul");

function search(element, list) {
    function getTextElement(list) {
        const text = new Map();
        const children = Array.from(list.children);
        children.forEach(child => {
            text.set(child, child.textContent.toUpperCase());
        })

        return text;
    };

    const text = getTextElement(list);

    element.addEventListener("keyup", function () {
        text.forEach((v, k) => v.includes(this.value.toUpperCase()) ? k.style.display = "" : k.style.display = "none");
    });
};

search(searchElement, searchedList[0]);

(function createDropdown() {
    const dropdowns = Array.from(document.querySelectorAll(".dropdown-creator"));

    function toggleShow(element) {
        const isVisible = window.getComputedStyle(element).display !== "none";
        if (isVisible) element.style.display = "none";
        if (!isVisible) element.style.display = "";
    };

    dropdowns.forEach(dropdown => {
        const children = Array.from(dropdown.children);
        search(dropdown.querySelector(".dropdown-search"), dropdown.querySelector(".list-group"));
        children
            .filter(child => child.tagName !== "BUTTON")
            .forEach(el => toggleShow(el));    
        document.querySelector(".dropdown-btn").addEventListener("click", () => {
            children
                .filter(child => child.tagName !== "BUTTON")
                .forEach(el => toggleShow(el));
        });
    });
})();