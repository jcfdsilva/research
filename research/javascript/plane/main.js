window.addEventListener('load', init, false);

var Colors = {
    red: 0xf25346,
    white: 0xd8d0d1,
    brown: 0x59332e,
    pink: 0xf5986E,
    brownDark: 0x23190f,
    blue: 0x68c3c0
};


function init() {
    createScene();
    createLights();
    createPlane();
    createSea();
    createSky(HEIGHT,WIDTH);
    document.addEventListener('mousemove', handleMouseMove, false);
    loop();
}

var scene,
camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
renderer, container,
hemisphereLight, shadowLight;

function createScene() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    // Create the camera
    camera = new THREE.PerspectiveCamera(60,WIDTH / HEIGHT,1,950);
    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 100;
    
    // Create the renderer
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;

    container = document.getElementById('canvas');
    container.appendChild(renderer.domElement);

    // update the camera and the renderer size if the user resizes window
    window.addEventListener('resize', handleWindowResize, false);
}

var mousePos = {
    x: 0,
    y: 0
};

//mousemove event
function handleMouseMove(event) {
    var tx = -1 + (event.clientX / WIDTH) * 2;
    var ty = 1 - (event.clientY / HEIGHT) * 2;
    mousePos = {
        x: tx,
        y: ty
    };
}

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    if (sky) {
        scene.remove(sky.mesh);
        sky = null;
    }
    createSky(HEIGHT,WIDTH)
}

function createLights() {
    ambientLight = new THREE.AmbientLight(0xdc8874, .5);
    scene.add(ambientLight);

    // For shadows
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;
    scene.add(shadowLight);
}

var sea;
function createSea() {
    sea = new Sea();
    sea.mesh.position.y = -600;
    scene.add(sea.mesh);
}

var sky;
function createSky(HEIGHT,WIDTH) {
    sky = new Sky(HEIGHT,WIDTH);
    sky.mesh.position.y = 200;
    sky.mesh.position.x = 0;
    sky.mesh.position.z = -550;
    scene.add(sky.mesh);
}

var airplane;
function createPlane() {
    airplane = new AirPlane();
    airplane.mesh.scale.set(.25, .25, .25);
    airplane.mesh.position.y = 100;
    scene.add(airplane.mesh);
}

function loop() {
    sea.mesh.rotation.x += .005;
    sea.moveWaves();
    updatePlane();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

function updatePlane() {

    var targetY = normalize(mousePos.y, -.75, .75, 25, 175);
    var targetX = normalize(mousePos.x, -.75, .75, -100, 100);

    // Move the plane at each frame by adding a fraction of the remaining distance
    airplane.mesh.position.y += (targetY - airplane.mesh.position.y) * 0.1;
    airplane.mesh.position.x += (targetX - airplane.mesh.position.x) * 0.1;

    // Rotate the plane proportionally to the remaining distance
    airplane.mesh.rotation.z = (targetX - airplane.mesh.position.x) * -0.0128;
    airplane.mesh.rotation.x = (airplane.mesh.position.y - targetY) * -0.0064;
}

function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + (pc * dt);
    return tv;
}