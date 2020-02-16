let nb = 0;
let arr = [];

for (nb; nb < 1000; nb = nb + 5) {
    document.write(`<span>${nb} </span>`);
    arr.push(nb);
    for (let i = 0; i < 1; i++) {
        if (nb < 900) {
            if (nb.toString().includes("95")) {
                document.write(`<br>`)
            }
        }
    }

}