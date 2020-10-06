const tab2Exp = [];
let index = 0;

console.log("hey");

async function getMaxIntegerValue() {
    function showMaxIntegerValue(i) {
        console.log(i);
        /*while (i--) {
            let valeur = Math.pow(i);
            tab2Exp.push(valeur.toFixed(0));
        };
        
        tab2Exp.reverse().forEach((val, i) => {
            document.write(`<span>${i}:${val}</span><br>`)
        });*/
    };

    await setInterval(() => {
        index++
        console.log(index);
        showMaxIntegerValue(index);
    }, 60);
};

getMaxIntegerValue();