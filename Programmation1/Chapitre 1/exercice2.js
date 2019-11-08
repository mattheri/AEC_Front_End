/**
 * Created by Shany on 2019-10-24.
 */
//Lire un nombre et afficher le carré et le cube de ce nombre.

//Étape 1 : trouver les variables
var nombre;
var carre;
var cube;

//Étape 2 : Lecture (demander à l'usager des données)
nombre = Number(prompt("Veuillez entrer un nombre svp : "));

//Étape 3 : Les calculs
carre = nombre * nombre;
cube = nombre * nombre * nombre;

//Étape 4 : AFFICHE les résultats
console.log("Le nombre est " + nombre);
console.log("Le carré est : " + carre);
console.log("Le cube est : " +  cube);