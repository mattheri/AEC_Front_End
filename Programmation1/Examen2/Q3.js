//génère un tableau avec des valeurs random entre 65 et 90
const tabNombres = (nombreDeNombres) => {
    const array = [];

    const generationDeNombresAleatoire = () => {
        let nombre = Math.floor(Math.random() * (90 - 65)) + 65;
        return nombre;
    };

    for (let i = 0; i < nombreDeNombres; i++) {
        array.push(generationDeNombresAleatoire());
    };

    return array;
};

//génère un tableau de lettre en convertissant les nombres en charctères unicode
//prend un nombre comme argument et passe ce nombre à la fonction tabNombre pour générer le tableau de nombres de la même grandeur
const tabLettres = (nombreDeLettres) => {
    const array = [];
    const arrayDeNombre = tabNombres(nombreDeLettres);

    const convertionDeLettre = (nombre) => {
        return String.fromCharCode(nombre);
    };

    for (let i = 0; i < arrayDeNombre.length; i++) {
        array.push(convertionDeLettre(arrayDeNombre[i]));
    };

    return array;
};

//prends un array comme argument et retourne un objet contenant les détails de cet array
const details = (array) => {

    //prends une lettre comme argument et retourne le nombre de fois que cette lettre apparaît dans le tableau
    const nombreDeLettres = (lettre) => {
        let nombreDeLettres = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === lettre) {
                nombreDeLettres++
            }
        };
    
        return nombreDeLettres;
    };

    //retourne le nombre de voyelles de l'array en argument
    const voyelles = () => {
        const voyelles = ["A", "E", "I", "O", "U", "Y"];
        let nombreDeVoyelles = 0;
    
        for (let i = 0; i < voyelles.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] === voyelles[i]) {
                    nombreDeVoyelles++;
                };
            };
        };

        return nombreDeVoyelles;
    };

    //prends un mot comme argument et retourne un objet dévrivant si le mot est dans le tableau
    //si le mot est dans le tableau, retourne l'indice de ce mot dans le tableau
    const checkPourMot = (mot) => {
        const arrayMot = Array.from(mot);
        const motTemporaire = [];
        let indexTemporaire = 0;
        let reponse = {
            _index: 0,
            _estPresent: false
        };

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < arrayMot.length; j++) {
                if (array[i] === arrayMot[j]) {
                    if (motTemporaire.join("").includes(mot)) {
                        reponse._index = indexTemporaire - (mot.length - 1);
                        reponse._estPresent = true;
                    } else {
                        motTemporaire.push(array[i]);
                        indexTemporaire = i;
                        break;
                    }
                };
            }
        };

        return reponse;
    };

    const details = {
        _nombreDeLettres: nombreDeLettres("E"),
        _nombreDeVoyelles: voyelles(),
        _mot: checkPourMot("DAD")
    };

    return details;
};

const detailsTableau = details(tabLettres(10000));

document.write(`<span>Le nombre de lettre "E": ${detailsTableau._nombreDeLettres}</span><br>`);
document.write(`<span>Le nombre de voyelles: ${detailsTableau._nombreDeVoyelles}</span><br>`);
document.write(`<span>Est-ce que le mot "DAD" est présent dans le tableau? ${detailsTableau._mot._estPresent ? "Oui" : "Non"}</span><br>`);
document.write(`<span>À quel indice? ${detailsTableau._mot._index}</span><br>`);