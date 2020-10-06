$("#boutonGauche").click(function () {
    let position = $(this).position().left;
    let amountToMove = 50;
    $(this).css({ "transition": "all 100ms ease-out" });
    $(this).css({ "transform": `translateX(-${amountToMove -= position}px)` });
});

$("#boutonDroite").click(function () {
    let position = $(this).position().left;
    let amountToMove = 50;
    $(this).css({ "transition": "all 100ms ease-out" });
    $(this).css({ "transform": `translateX(${position+=amountToMove}px)` });
});

$("#boutonChangerImage").click(function () {
    let currentImage = $("#flashID").attr("src");
    if (currentImage === "img/Flash1.png") {
        $("#flashID").attr("src", "img/Flash2.png");
    } else {
        $("#flashID").attr("src", "img/Flash1.png");
    }
});

$("#boutonEnleverImage").click(function () {
    $("#flashID").attr("src", null);
});

$("#boutonAjouterImage").click(function () {
    $("#flashID").attr("src", "img/Flash1.png");
});

$("#boutonAjouterAttribut").click(function () {
    $("#flashID").attr("alt", "Photo de Flash");
});

$("#boutonAjouterTitre").click(function () {
    let title = "Justice League";
    $("h1").prepend(`<h1>${title}</h1>`);
});

(function duplicate() {
    let numID = 0;

    $("#boutonDupliquer").click(function () {
        let newImage = $(`<img id="flashID${numID}" class="flashClass" src="img/Flash1.png" width="200px"/>`);
        newImage.appendTo($("#flashID").parent());
        numID++;
    });

});

$("#boutonRalentir").click(function () {
    $(".flashClass")[$(".flashClass").length -1].remove();
});

(function teleportation() {
    let shouldGoBack = false;
    let originalPosition = $("#flashID").offset();

    $("#boutonTeleport").click(function () {
        console.log(originalPosition);
        let buttonPosition = $(this).offset();
        $("#flashID").css({ "position": "absolute" });

        if (shouldGoBack) {
            $("#flashID").css({ "top": originalPosition.top + "px" });
            $("#flashID").css({ "left": originalPosition.left + "px" });
        } else {
            $("#flashID").css({ "top": buttonPosition.top + "px" });
            $("#flashID").css({ "left": buttonPosition.left + "px" });
        }
        shouldGoBack = !shouldGoBack;
    });
})();

(function supremeSpeedOrNormalSpeed() {
    let opacity = 1;
    let interval;

    $("#boutonVitesseSupreme").click(function () {
        interval = setInterval(function () {
            opacity === 1 ? opacity = 0 : opacity = 1
            $("#flashID").css({ "opacity": opacity });
        }, 500);
    });

    $("#boutonFinVitesseSupreme").click(function () {
        clearInterval(interval);
        $("#flashID").css({ "opacity": 1 });
    })
})();


$("#boutonNuke").click(function () {
    $("body").children().remove();
    $("body").css({ "background-image": "url('./img/nuke.jpg')" });
    $("body").css({ "background-size": "cover" });
    $("body").css({ "background-repeat": "no-repeat" });
    $("body").css({ "background-position": "center" });
});

(function personel1() {
    let mouseX;
    let mouseY;
    let top = 0;
    let left = 0;

    function updateMousePosition(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    };

    $("#boutonPerso1").css({ "transition": "all 100ms ease-out" });

    $("body").mousemove(updateMousePosition);
    $("#boutonPerso1").mouseenter(function () {
        updateMousePosition;
        $("#boutonPerso1")
            .css({ "position": "absolute" })
            .css({ "z-index": 1 });
        if ($("#boutonPerso1").offset().top >= mouseY) {
            $("#boutonPerso1").css({ "top": `${top -= 50}px` });
        } else {
            $("#boutonPerso1").css({ "top": `${top += 50}px` });
        }
        console.log("mouseX", updateMousePosition.mouseX);
        if (mouseX > $("#boutonPerso1").offset().left) {
            $("#boutonPerso1").css({ "left": `${left -= 50}px` });
        } else {
            $("#boutonPerso1").css({ "left": `${left += 50}px` });
        }
    });
    $("body").mouseleave(updateMousePosition);

    $("#boutonPerso1").click(function () {
        $("body").children().remove();
        $("body").append($("<h1>You made it!</h1>"));
    })

})();

$("#boutonPerso2").click(function () {
    console.log($("body"));
    $("body").children("div").find("div").each(function () {
        $(this).slideUp().delay($(this).index() * 100).slideDown();
    })
});
