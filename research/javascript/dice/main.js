// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Step the physics world
    world.step(1 / 60);

    // Sync Three.js dice with Cannon.js body
    dice.position.copy(diceBody.position);
    dice.quaternion.copy(diceBody.quaternion);

    // Render the scene
    renderer.render(scene, camera);
}

animate();

// Resize handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});