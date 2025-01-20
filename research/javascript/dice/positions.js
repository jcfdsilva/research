// Physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
    
    
// Cannon.js ground
const groundBody = new CANNON.Body({
    mass: 0, // Static object
    shape: new CANNON.Plane(),
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);


// Cannon.js dice body
const diceBody = new CANNON.Body({
    mass: 1, // Affected by gravity
    shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), // Matches Three.js dice size
});
diceBody.position.set(0, 5, 0); // Start above ground
diceBody.angularVelocity.set(10, 10, 10); // Add initial spin
diceBody.angularDamping = 0.1; // Slow down spin gradually
world.addBody(diceBody);