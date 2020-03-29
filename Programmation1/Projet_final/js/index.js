let classCol;
let inputCharactersArray = [];
$("#choose-bg-color").hide();
let length;

/**************************************************************************************
* Validation avec micro-animation pour indiquer si le mot est trop court ou trop long *
**************************************************************************************/
function validate(state, length) {
    let min = 3;
    let max = 12;
    if (state === "short") {
        $("#validation").text(`Il vous manque encore ${min - length} ${min - length === 1 ? "lettre" : "lettres"}`);
    };

    if (state === "long") {
        $("#validation").text(`Vous avez trop de lettres! Enlevez ${length - max} lettres`);
    };
};

/***************************************************
* Accents devient la lettre donc éèàêëù === eeaeeu *
***************************************************/
function removeAccents(match, p1, p2, p3, p4, p5, p6, string) {
    if (p1 || p2 || p3 || p4) {
        return "e";
    };

    if (p5) {
        return "a";
    };

    if (p6) {
        return "u";
    }
};

/****************************************************
* Affiche la modal lorsque l'utilisateur pèse sur * *
****************************************************/
$("body").keydown(function (event) {
    if (event.code === "NumpadMultiply" || event.shiftKey && event.code === "Digit8") {
        event.preventDefault();
        showModal(`./media/Letters/CS`, `./media/Letters/CS/CS`.split("/"), "", this);
    };
});

/********************************************
* Retourne le bon path selon l'image entrée
********************************************/
function getImagesBasedOnInputCharacter(input) {
    const charactersArray = input.split("");
    let folderName;

    for (let i = 0; i < charactersArray.length; i++) {
        folderName = charactersArray[i].toUpperCase();
    }

    let randomNumber = Math.floor(Math.random() * 4 + 1);
    let folderPath = `./media/Letters/${folderName}/${folderName}${randomNumber}.jpg`;

    return folderPath;
};

/****************************************************
* Retourne la bonne classe selon le nombre d'images *
****************************************************/
function determineColNumberBasedOnInputLength(length) {

    let classCol = `col-1`;

    if (length <= 3) {
        classCol = `col-4`;
    };

    if (length === 4) {
        classCol = `col-3`;
    };

    if (length > 4 && length < 7) {
        classCol = `col-2`;
    };

    return classCol;
};

/*********************************************
* Changer la classe selon le nombre d'images *
*********************************************/
function changeClassesDependingOnNumberOfImages() {
    $("img").each(function() {
        let classes = $(this).attr("class").split(" ");

        if ($("img").length) {
            if (classes[2] !== classCol) {
                $("img").removeClass(classes[2]).addClass(classCol);
            }
        }
    });
}

/****************
* Créer l'image *
*****************/
function createImageElement(input) {
   
    if (typeof input === "object") {
        classCol = determineColNumberBasedOnInputLength($("#photociti img").length ? $("#photociti img").length : 0);
        newImage = $("<img />")
            .addClass(`img-fluid no-gutters ${classCol}`);
        return newImage;
    };

    if (event.code.includes("Key") && event.code) {
        let newImage;
        if (typeof input === "string") {
            const length = Array.from(input).length;
            classCol = determineColNumberBasedOnInputLength($("img").length ? length : 0);
            newImage = $("<img />")
                .addClass(`img-fluid no-gutters ${classCol}`)
                .attr("src", getImagesBasedOnInputCharacter(input));
            newImage.appendTo($("#photociti"));
            changeClassesDependingOnNumberOfImages();
        };
    };
};

/**********************************************************
* L'usager peut sélectionner entre 3 et 12 caractères max 
**********************************************************/
function handleMinAndMaxCharacters(element, length) {
    let classes = $("#photociti").attr("class").split(" ");
    if (length < 3) {
        if ($(element).hasClass("is-valid")) {
            $(element).removeClass("is-valid");
        };
        $(element).addClass("was-validated is-invalid");
        validate("short", length);
        
        $("#photociti").removeClass(classes[3]);
    };

    if (length > 12) {
        if ($(element).hasClass("is-valid")) {
            $(element).removeClass("is-valid");
        };
        $(element).addClass("was-validated is-invalid");
        validate("long", length);
        $("#photociti").removeClass(classes[3]);
    };

    if (length >= 3 && length <= 12) {
        $(element).removeClass("is-invalid").addClass("is-valid");
    }
};

/**********************************************
* Fonction principale de saisie de caractères *
**********************************************/
$("#text-input").keydown(function (event) {
    
    if (event.code === "Backspace") {
        if ($("img").length) {
            const elements = Array.from($("img"));
            elements[elements.length - 1].remove();
            classCol = determineColNumberBasedOnInputLength($("img").length === 0 ? 1 : $("img").length);
            changeClassesDependingOnNumberOfImages();
            handleMinAndMaxCharacters(this, $("#photociti img").length);
        }

        if (!$("img").length) {
            inputCharactersArray.length = 0;
        }
    };

    if (event.code === "NumpadMultiply" || event.shiftKey && event.code === "Digit8") {
        event.preventDefault();
    };

    //Les caractères éèëêàù ne sont pas gérés
    const regex = /(é)|(è)|(ê)|(ë)|(à)|(ù)/g;

    if (event.key !== "Backspace") {
        inputCharactersArray.push(event.key);
        let input = inputCharactersArray.join("");

        let newInput = input.replace(regex, removeAccents);
        createImageElement(newInput);
    }

    handleMinAndMaxCharacters(this, $("#photociti img").length);
    
    if ($("#text-input").hasClass("is-valid")) {
        $("#choose-bg-color").show();
    } else {
        $("#choose-bg-color").hide();
    }
});

/******************************************************************
* Retourne le nombre d'images dans un dossier donné avec un fetch 
******************************************************************/
async function getMaximumNumberOfImages(path, fileLetter) {
    let numberOfImages = 0;
    let num = 0;
    
    //fetch les images. Aussitôt que je retourne une erreur, cela veut dire que je n'ai plus d'images.
    //le nombre de fois que j'ai fetché est donc le nombre d'images que j'ai
    while (!numberOfImages) {
        num++;
        let response = fetch(`${path}/${fileLetter[3]}${num}.jpg`);
        let status = await response;
        if (!status.ok) {
            numberOfImages = num - 1;
            return numberOfImages;
        }
    };
}

/**********************************
* Fonction pour afficher la modal 
**********************************/
function showModal(path, fileLetter, previousPath, image) {
    $("#selection-modal").modal("show");
    
    //Une fois la modal ouverte, afficher les autres images disponibles
    $("<div class='carousel-item active'></div").appendTo("#selection-modal .carousel-inner");
    $("#selection-modal").on("shown.bs.modal", async function () {
        let numberOfImages = await getMaximumNumberOfImages(path, fileLetter);

        //loop le nombres d'images trouvées. Je retourne 4 images par slider.
        //je ne retourne pas l'image qui est déjà affichée
        let num = 1;
        for (let i = 1; i <= numberOfImages; i++) {
            if (previousPath !== `${path}/${fileLetter[3]}${i}.jpg`) {
                if (fileLetter[3]) {
                    if (numberOfImages >= 5) {
                        if (i > 4) {
                            //S'il y a plus de 4 images, créer le nombre additionel de carousel-item requis
                            if (num < numberOfImages / 4) {
                                $(`<div class='carousel-item dynamic-carousel-item ${num}'></div>`).appendTo("#selection-modal .carousel-inner");
                                num++;
                            }
                        }
                    }

                    //Si moins ou 4 images, attacher celles-ci à la seule carousel-item
                    if (i <= 4) {
                        $("<img class='col-3 no-gutters modal-images' />")
                        .attr("src", `${path}/${fileLetter[3]}${i}.jpg`)
                        .appendTo("#selection-modal .active");
                    };

                    //S'il y a plus de 4 images, créer les images additionnelles et les attacher aux carousel-items créés précédemment 
                    if (numberOfImages >= 5) {
                        $(`.dynamic-carousel-item`).each(function (x) {
                            //limiter le nombre d'images à 4 par slide
                            if ($(`.dynamic-carousel-item`)[x].childNodes.length < 4) {
                                if (x) {
                                    //si à la deuxième slide, multiplier l'index des slides par le nombre de slides
                                    if ((i + (num * x)) > numberOfImages) {
                                        //Si le nombre donné dépasse le nombres d"images, do nothing
                                        return;
                                    } else {
                                        /********************************************************************************************
                                        *Sinon, attacher les images au carousel slider approprié                                    *
                                        *Si l'index n'est pas incrémenté de la sorte, il attache seulement i à i + 4                *
                                        *Comme i incrémente seulement de 1, la première image de chaque slide est incrémentée de 1  *
                                        ********************************************************************************************/
                                        $("<img class='col-3 no-gutters modal-images' />")
                                            .attr("src", `${path}/${fileLetter[3]}${i + (num * x)}.jpg`)
                                            .appendTo($(this));
                                    }
                                } else {
                                    $("<img class='col-3 no-gutters modal-images' />")
                                    .attr("src", `${path}/${fileLetter[3]}${i}.jpg`)
                                    .appendTo($(this));
                                }
                            };
                            
                        });
                    }
                }
            };
        };

        //Cliquer sur l'image remplace l'image de base
        $(".modal-images").on("click", function () {
            if (!image.length) {
                image = createImageElement(image);
                image.attr("src", $(this).attr("src"));
                image.appendTo($("#photociti"));
                classCol = determineColNumberBasedOnInputLength($("img").length === 0 ? 1 : $("img").length);
                changeClassesDependingOnNumberOfImages();
                handleMinAndMaxCharacters($("#text-input"), $("#photociti img").length);
            } else {
                image.attr("src", $(this).attr("src"));
            }
            $("#selection-modal").modal("hide");
        });
    });

    //Enlève toute information relative au path de l'image cliquée précédemment
    $("#selection-modal").on("hide.bs.modal", function () {
        fileLetter.length = 0;
        path = "";
        image = "";
        $(".modal-images").remove();
        $(".carousel-item").remove();
        $(".active").remove();
    });
}

/***************************************
 * Cliquer sur une image ouvre un modal*
 ***************************************/
$("section").on("click", "img", function (event) {
    let source = $(this).attr("src").split("/");
    let originalSource = $(this).attr("src");
    source.length = 4;
    let newSource = source.join("/");
    let that = $(this);

    showModal(newSource, source, originalSource, that);
});

/************************************************
 * L'utilisateur peut choisir sa couleur de fond*
 ***********************************************/
$(".bg-color").click(function () {
    let classes = $(this).attr("class").split(" ");
    let previousClass = $("#photociti").attr("class").split(" ");
    if (previousClass[3]) {
        $("#photociti").removeClass(previousClass[3]);
    }
    $("#photociti").addClass(classes[3]);
});