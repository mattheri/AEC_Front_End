// PERMUTATION
// Lire 2 nombres A et B au clavier. Donner à A la valeur de B, et à B la valeur de A en utilisant uniquement 3 variables A B C. Afficher A et B.
//
//     Testez ce code!
// var a;
// var b;
// var c;
//
// a = prompt("Entrez la valeur de A");
// b = prompt("Entrez la valeur de B");
//
// //Utilisez la variable C ICI pour que ça fonctionne  et modifiez une des deux lignes suivantes
// a = b;
// b = a;
//
// alert("A vaut maintenant " + a);
// alert("B vaut maintenant " + b);
//Est-ce que ça fonctionne? Pourquoi pas?

var a;
var b;
var c;

a = prompt("Entrez la valeur de A");
b = prompt("Entrez la valeur de B");

//Utilisez la variable C ICI pour que ça fonctionne  et modifiez une des deux lignes suivantes
c = a
a = b;
b = c;

alert("A vaut maintenant " + a);
alert("B vaut maintenant " + b);