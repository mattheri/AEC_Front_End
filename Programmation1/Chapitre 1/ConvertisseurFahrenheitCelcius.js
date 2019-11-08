//Programmer un convertisseur Fharenheit -> Degré Celsius

var fahrenheit = Number(prompt("Entrez la température en Faranheit: "));
var celsius = (fahrenheit - 32) * 5/9;

console.log(`Il fait présentement ${celsius} degrés dehors!`);