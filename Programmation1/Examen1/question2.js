/*Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :

		tranche à afficher	     age
				
		enfant			         0  <=  age  <= 12
		adolescent		         13  <=  age  <= 17
		adulte			         18  <=  age  <= 54
		senior			         55  et plus

Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.*/

var age = Number(prompt("Entrez l'âge de la personne: ")) || "Pas encore né";

var enfant = "0 à 12 ans.";

var adolescent = "13 à 17 ans.";

var adulte = "18 à 24 ans.";

var senior = "55 ans et plus.";

var message = "La personne dont vous avez entré l'âge appartient au groupe des ";

if (age >= 0 && age <= 12) {

    document.write(message += enfant);

} else if (age >= 13 && age <= 17) {

    document.write(message += adolescent);

} else if (age >= 18 && age <= 54) {

    document.write(message += adulte);

} else if (age >= 54) {

    document.write(message += senior);

} else {

    document.write(age);

};