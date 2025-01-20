Sky = function(HEIGHT,WIDTH) {
    this.mesh = new THREE.Object3D();
    
    const createStar = () => {
        const starSize = 0.6;
        const starGeometry = new THREE.SphereGeometry(Math.random() * 0.4 + 0.4, 16, 16);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set star color to white
        const star = new THREE.Mesh(starGeometry, starMaterial);
    
        // Generate random positions for the stars within the cube
        star.position.y = (Math.random() - 0.5) * HEIGHT;
        star.position.z = (Math.random() - 0.5) * 500;
        star.position.x = (Math.random() - 0.5) * WIDTH;
    
        this.mesh.add(star);
    }
    
    const numStars = 600;
    for (let i = 0; i < numStars; i++) {
      createStar();
    }

    const twinklingStars = this.mesh.children;

    // Function to create the twinkle effect
    const twinkle = () => {
        twinklingStars.forEach((star) => {
            const opacity = Math.random() * 1 + 0; // Random opacity between 0.3 and 1
            star.material.opacity = opacity;
        });
    };

    // Call the twinkle function every 1000ms (1 second)
    setInterval(twinkle, 100);
}

// this.nbClouds = 50;
    
    // //distribute the clouds around a circle
    // var stepAngle = Math.PI * 2 / this.nbClouds;
    
    // for (var i = 0; i < this.nbClouds; i++) {
    //     var c = new Cloud();

    //     //add some randomness to the cloud placement
    //     var a = (stepAngle + ((Math.random()*stepAngle)-(stepAngle/2))) * i;
    //     //height between 750 & 950
    //     var h = 750 + Math.random() * 200; // this is the distance between the center of the axis and the cloud itself
    
    //     c.mesh.position.y = Math.sin(a) * h;
    //     c.mesh.position.x = Math.cos(a) * h;
    
    //     // rotate the cloud according to its position
    //     c.mesh.rotation.z = a + Math.PI / 2;
    
    //     // for a better result, we position the clouds 
    //     // at random depths inside of the scene
    //     c.mesh.position.z = -400 - Math.random() * 400;
    
    //     // we also set a random scale for each cloud
    //     var s = 1 + Math.random() * 2;
    //     c.mesh.scale.set(s, s, s);
    
    //     // do not forget to add the mesh of each cloud in the scene
    //     this.mesh.add(c.mesh);
    // }

    // this.mesh.rotation.y+=90