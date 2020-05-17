
/******************************************
Retourne la largeur et hauteur du parent */
function getParentNodeDimensions(childNode) {
  const width = childNode.parentElement.getBoundingClientRect().width;
  const height = childNode.parentElement.getBoundingClientRect().height;

  return { width, height };
};

/***************************************************************
Garde le ratio en recalculant les dimensions quant l'utilisateur
fait un resize puis refait la node avec les nouvelles données */
function keepAspectRatioOnResize(node, callback) {
  window.addEventListener("resize", function () {
    const { width, height } = getParentNodeDimensions(node);
    callback(width, height);
  });
};

/*******************************************************
Crée le canvas de la planète Mars. Retourne ce canvas */
function createCanvas(width, height) {
  const canvas = document.getElementById("canvas");
  console.log(height);
  width = width || getParentNodeDimensions(canvas).width;
  height = height / 2 || getParentNodeDimensions(canvas).height;
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx = canvas.getContext("2d");

  function createCircle() {
    const arc = new Path2D();
    arc.arc((width / 2.4), (height / 2), (width / 6), Math.PI * 2, false);
    const gradient = ctx.createRadialGradient(width / 2.4, height / 2, 10, width / 2.4, height / 2, 40);

    function addGradient() {
      gradient.addColorStop(0, "#faaa2f");
      gradient.addColorStop(0.5, "#e39319");
      gradient.addColorStop(1, "#ba7916");
      ctx.fillStyle = gradient;
      ctx.fill(arc);
    }
    addGradient();

  };
  createCircle();

  function addText() {
    ctx.font = "20px Blippo, fantasy";
    ctx.fillStyle = "#000000";
    ctx.fillText("MARS", width / 2.8, height / 1.90, width / 3);
  }
  addText();

  let num = 40;

  function addStars() {
    const star = new Path2D();
    ctx.fillStyle = "white";
    const measure = Math.floor((Math.random() * width / 200) + 0.01);
    ctx.fillRect(
      Math.floor((Math.random() * width) + 1),
      Math.floor((Math.random() * height) + 1),
      measure,
      measure);
    ctx.globalCompositeOperation = "destination-over";
  };

  while (num--) {
    addStars();
  }

  return canvas;
};

/****************************************
Crée la flèche en SVG. Retourne ce svg. */
function setSVGPoints(width, height) {
  const svg = document.querySelector("svg");
  width = width || getParentNodeDimensions(svg).width;
  height = height || getParentNodeDimensions(svg).height;
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  const triangle = svg.querySelector("polygon");
  const rectangle = svg.querySelector("rect");
  const text = svg.querySelector("text");
  const trianglePoints = `${width / 3}, ${height / 2} ${width / 1.5}, ${height / 2}, ${width / 2}, 0`;
  triangle.setAttribute("points", trianglePoints);
  const rectanglePoints = {
    x: width / 2.4,
    y: height / 3,
    width: width / 6,
    height: height / 2
  };
  rectangle.setAttribute("x", rectanglePoints.x);
  rectangle.setAttribute("y", rectanglePoints.y);
  rectangle.setAttribute("width", rectanglePoints.width);
  rectangle.setAttribute("height", rectanglePoints.height);
  const textPoints = {
    x: width / 4,
    y: height
  };
  text.setAttribute("x", textPoints.x);
  text.setAttribute("y", textPoints.y);
  text.setAttribute("font-size", width / 12);

  return svg;
};

/**********************************************************
Appel un animationFrame pour calculer la grandeur au départ
et on resize */
requestAnimationFrame(function () {
  const canvas = createCanvas();
  const svg = setSVGPoints();
  keepAspectRatioOnResize(canvas, createCanvas);
  keepAspectRatioOnResize(svg, setSVGPoints);
});

/*****************************************************
Fonction pour afficher et utiliser les boutons PayPal*/
(function setPaypal() {
    const SECRET = "EK3tyHy4NtwiPEYIMdNfb005TCLA1FLYl_25tMU6sjaAC4lbhtccSqDKCr0L0t4bp1P0c1syt9OANQc-";

    paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01'
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render("#paypal-button-container");
})();