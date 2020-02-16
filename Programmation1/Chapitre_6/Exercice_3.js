class Examen {

    constructor(
        object,
        studentAnswers,
    ) {
        this.object = object;
        this.studentAnswers = studentAnswers;
    };

    GetAnswers(answers) {
        this.studentAnswers = answers;
    };

    GetLenght() {
        let length = Object.keys(this.object).length;

        return length;
    };

    GetNote() {
        const pointsPerQuestion = 100 / Object.keys(this.object).length;
        let total = 0;

        for (let i in this.object) {
            if (this.studentAnswers[i] === this.object[i]) {
                total += pointsPerQuestion;
            }
        }

        return total;
    }

};

const premier = new Examen({1:"a",2:"a",3:"b",4:"d",5:"b"});


class Etudiant {

    constructor(nom, prenom, examen) {
        this.nom = nom;
        this.prenom = prenom;
        this.examen = examen;
    };

    DoExam() {
        
    }
}

const boyNames = [
    "Liam",
    "Noah",
    "William",
    "James",
    "Oliver",
    Benjamin,
    Elijah,
    Lucas,
    Mason,
    Logan,
    Alexander,
    Ethan,
    Jacob,
    Michael,
    Daniel,
    Henry,
    Jackson,
    Sebastian,
    Aiden,
    Matthew,
    Samuel,
    David,
    Carter,
    Owen,
    Wyatt,
    John,
    Jack,
    Luke,
    Jayden,
    Dylan,
    Grayson,
    Levi,
    Issac,
    Gabriel,
    Julian,
    Mateo,
    Anthony,
    Jaxon,
    Lincoln,
    Joshua,
    Christopher,
    Andrew,
    Theodore,
    Caleb,
    Ryan,
    Asher,
    Nathan,
    Thomas,
    Leo,
    Isaiah,
    Charles,
    Josiah,
    Hudson,
    Christian,
    Hunter,
    Connor,
    Eli,
    Ezra,
    Aaron,
    Landon,
    Adrian,
    Jonathan,
    Nolan,
    Jeremiah,
    Easton,
    Elias,
    Colton,
    Cameron,
    Carson,
    Robert,
    Angel,
    Maverick,
    Nicholas,
    Dominic,
    Jaxson,
    Greyson,
    Adam,
    Ian,
    Austin,
    Santiago,
    Jordan,
    Cooper,
    Brayden,
    Roman,
    Evan,
    Ezekiel,
    Xavier,
    Jose,
    Jace,
    Jameson,
    Leonardo,
    Bryson,
    Axel,
    Everett,
    Parker,
    Kayden,
    Miles,
    Sawyer,
    Jason,
]