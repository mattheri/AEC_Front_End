const eleves = [
    "Shany",
    "Mathieu",
    "Michael",
    "Maud",
    "Rogancier"
];

const notes = [
    90,
    85,
    80,
    75,
    70
];

const totalNotes = notes.reduce((acc, curr) => acc + curr);
const moyenne = totalNotes / notes.length;

eleves.forEach((eleve, i) => !!(notes[i] >= moyenne) && document.write(`<span>L'élève ${eleve} a obtenu ${notes[i]}</span><br>`));