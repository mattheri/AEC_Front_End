import * as THREE from "./build/three.module.js";

let currentlyFollowedPlanet = "scene";
let planet = ["scene", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

(function intersectionObserver() {
    let options = {
        rootMargin: "0px",
        threshold: 0.4
    };

    let targets = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case "sun":
                        currentlyFollowedPlanet = planet[0];
                        break;
                    case "mercury":
                        currentlyFollowedPlanet = planet[1];
                        break;
                    case "venus":
                        currentlyFollowedPlanet = planet[2];
                        break;
                    case "earth":
                        currentlyFollowedPlanet = planet[3];
                        break;
                    case "mars":
                        currentlyFollowedPlanet = planet[4];
                        break;
                    case "jupiter":
                        currentlyFollowedPlanet = planet[5];
                        break;
                    case "saturn":
                        currentlyFollowedPlanet = planet[6];
                        break;
                    case "uranus":
                        currentlyFollowedPlanet = planet[7];
                        break;
                    case "neptune":
                        currentlyFollowedPlanet = planet[8];
                        break;
                }
            }
        });
    }, options);

    targets.forEach(t => observer.observe(t));
})();

function initTHREE() {

    //Basic THREE.js stuff out of the way
    const scene = new THREE.Scene();
    const canvas = document.querySelector("#THREE");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //camera options
    const fieldOfView = 60;
    const aspectRatio = canvas.clientWidth / canvas.clientHeight;; //by default a canvas is 300x150 pixels which makes the aspect 300/150 or 2.
    const near = 0.1; //defines how near you can be the object and still be rendered
    const far = 1000; //defines how far you can be from the object and still be rendered
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);

    function resizeRendererToDisplaySize(renderer) {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }

    const loader = new THREE.TextureLoader();

    //helper to create a sphere with texture without having to type all this 8 times
    function constructPlanet(planetName, size, orbitSize, innerDiameter, facets, distanceFromAxis) {
        //sets the basic geometry of a planet
        //size isn't scaled as this would be ugly and would break the whole thing, go with aesthetics
        //orbitSize, innerDiameter and facets are used to create an invisible ring to follow

        const geometry = new THREE.SphereGeometry(size, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: loader.load(`/media/${planetName}.jpg`) });
        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);

        // function createOrbit() {
        //     const orbitGeometry = new THREE.RingGeometry(orbitSize + 0.01, innerDiameter - 0.01, facets);
        //     const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x757064, side: THREE.DoubleSide });
        //     const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        //     orbit.name = planetName + "Orbit";
        //     orbit.position.set(distanceFromAxis, 0, 0);
        //     orbit.rotation.x = Math.PI / 2;
        //     scene.add(orbit);
        // };

        // createOrbit();

        return planet;
    };

    function movePlanetOnOrbit(planet, orbitTime, distanceFromAxis) {
        //date is used to get a very stable yet different data each time to simulate the speed of the planet
        //much maths
        //distance from axis actually sets the planet on the plane, distanced from the middle which is the sun
        planet.position.x =
            Math.cos(Date.now() * (1.0 / (orbitTime * 200)) + 10) * distanceFromAxis;
        planet.position.z = 
            Math.sin(Date.now() * (1.0 / (orbitTime * 200)) + 10) * distanceFromAxis;
    };

    //geometry of stars
    const star = constructPlanet("sun", 3);

    //geometry of mercury
    const mercuryAxis = 8;
    const mercuryOrbit = 88; //88 days
    const mercury = constructPlanet("mercury", 0.2);

    //geometry of venus
    const venusAxis = 15;
    const venusOrbit = 225; //225 days
    const venus = constructPlanet("venus", 0.3);

    //geometry of earth
    const earthAxis = 23;
    const earthOrbit = 365; //1 year aka 365 days
    const earth = constructPlanet("earth", 0.35);

    //geometry of mars
    const marsAxis = 30;
    const marsOrbit = 687; //687 days
    const mars = constructPlanet("mars", 0.25);

    //geometry of jupiter
    const jupiterAxis = 40;
    const jupiterOrbit = 12 * 365; //12 years
    const jupiter = constructPlanet("jupiter", 0.4);

    //geometry of saturn
    const saturnAxis = 45;
    const saturnOrbit = 29 * 365; //29 years
    const saturn = constructPlanet("saturn", 0.4);

    //geometry of uranus
    const uranusAxis = 50;
    const uranusOrbit = 84 * 365; //84 years
    const uranus = constructPlanet("uranus", 0.38);

    //geometry of neptune
    const neptuneAxis = 60;
    const neptuneOrbit = 165 * 365; //165 years
    const neptune = constructPlanet("neptune", 0.36);

    //updates the camera and set some variable outside function to update them when the function is ran
    let cameraPlacement = 1;

    const defaultPosition = {
        position: {
            z: 1,
            x: -5,
            y: 0
        }
    }

    // function updateCameraPositionSlowly(previousPosition) {
    //     let futurePosition = {
    //         x: currentlyFollowedPlanet.position.x,
    //         y: currentlyFollowedPlanet.position.y,
    //         z: currentlyFollowedPlanet.position.z
    //     };

    //     previousPosition = {
    //         x: previousPosition.position.x,
    //         y: previousPosition.position.y,
    //         z: previousPosition.position.z
    //     };

    //     for (let i in previousPosition) {
    //         if (previousPosition[i] < futurePosition[i] || previousPosition[i] > futurePosition[i]) {
    //             previousPosition[i] += time / 10;
    //         };
    //     };

    //     position.x = previousPosition.x;
    //     position.y = previousPosition.y;
    //     position.z = previousPosition.z;
    // }

    // const position = {
    //     x: defaultPosition.position.x,
    //     y: defaultPosition.position.y,
    //     z: defaultPosition.position.z
    // };

    function updateCamera(time) {

        switch (currentlyFollowedPlanet) {
            case "mercury":
                //updateCameraPositionSlowly(camera.position.copy(camera.position));
                currentlyFollowedPlanet = mercury;
                console.log("current", currentlyFollowedPlanet.position);
                break;
            case "venus":
                currentlyFollowedPlanet = venus;
                break;
            case "earth":
                currentlyFollowedPlanet = earth;
                break;
            case "mars":
                currentlyFollowedPlanet = mars;
                break;
            case "jupiter":
                currentlyFollowedPlanet = jupiter;
                break;
            case "saturn":
                currentlyFollowedPlanet = saturn;
                break;
            case "uranus":
                currentlyFollowedPlanet = uranus;
                break;
            case "neptune":
                currentlyFollowedPlanet = neptune;
                break;
            case "scene":
                //updateCameraPositionSlowly(camera.position.copy(camera.position));
                currentlyFollowedPlanet = defaultPosition;
                cameraPlacement = -1;
                break;
        }

        camera.lookAt(currentlyFollowedPlanet.position.x, currentlyFollowedPlanet.position.y, currentlyFollowedPlanet.position.z);
        camera.position.y = currentlyFollowedPlanet.position.y;
        camera.position.z = currentlyFollowedPlanet.position.z;
        camera.position.x = currentlyFollowedPlanet.position.x + cameraPlacement;
    }

    //call recursively the render function in an animation frame to make the object turn
    function render(time) {
        time *= 0.001 //converts time into seconds
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = document.querySelector("#THREE");
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }
        //set the rotation of all spheres
        star.rotation.x = time / 10;
        star.rotation.z = time / 10;
        mercury.rotation.x = time / 10;
        mercury.rotation.z = time / 10;
        venus.rotation.x = time / 10;
        venus.rotation.z = time / 10;
        mars.rotation.y = time / 9;
        earth.rotation.y = time / 10;
        jupiter.rotation.y = time / 3;
        saturn.rotation.y = time / 3;
        uranus.rotation.x = time / 10;
        uranus.rotation.z = time / 10;
        neptune.rotation.y = time;
        //start the movement on planet and update it on each frame
        movePlanetOnOrbit(mercury, mercuryOrbit, mercuryAxis);
        movePlanetOnOrbit(venus, venusOrbit, venusAxis);
        movePlanetOnOrbit(earth, earthOrbit, earthAxis);
        movePlanetOnOrbit(mars, marsOrbit, marsAxis);
        movePlanetOnOrbit(jupiter, jupiterOrbit, jupiterAxis);
        movePlanetOnOrbit(saturn, saturnOrbit, saturnAxis);
        movePlanetOnOrbit(uranus, uranusOrbit, uranusAxis);
        movePlanetOnOrbit(neptune, neptuneOrbit, neptuneAxis);
        updateCamera(time);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);  //can be wonky on Safari if css is 
                                    //used directly on the canvas because of weird placement in event loop
    
    
};

initTHREE();