/*Trouvez TOUS les nombres de Armstrong de moins de 1000
On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.  

Exemple :  
153 = = 13**3 + 53**3 + 33**3 = 1 + 125 + 27, est un nombre de Armstrong. */

const isArmstrong = (digit, nombre) => {
    let somme = 0;

    let temp = nombre;

      digit = digit ** 3;
      somme = somme + digit;

      nombre = parseInt(nombre / 10);
    
    return temp === somme;
};

const Armstrong = (nombre) => {

    //si chiffre**3 > nombre (1000) ajouter un chiffre et remettre chiffre a 1

    for (let i = 0; i <= nombre; i++) {
        let dizaine = i % 100;
        let unites = i % 10;

        if (isArmstrong(dizaine, nombre) || isArmstrong(unites, nombre)) {
            console.log(i);
        };
    };

};

Armstrong(1000);