let numberOfPolls = 20;
const categories = [];
const numberOfChildCategories = [];

for (let i = 1; i < 11; i++) {
    categories.push(i);
    numberOfChildCategories.push(0);
};

while (numberOfPolls) {
    let numberOfChild = Number(prompt("Entrez le nombre d'enfants"));

    categories.forEach((categorie, i) => !!(i === numberOfChild) && numberOfChildCategories[i]++)

    /*for (let i = 1; i < categories.length; i ++) {

        if (i === numberOfChild) {
            numberOfChildCategories[i]++;
        };
    };*/

    numberOfPolls--
};