
var AirPlane = function() {
    this.mesh = new THREE.Object3D();
    // Create the material for the side wing
    const matPlane = new THREE.MeshPhongMaterial({
      color: 0xff0000, // Red color
      shading: THREE.FlatShading,
    });

    // BASE
    const geomRightBase = new THREE.Geometry();
    const base = 30;
    const height = 100;

    // RIGHT SIDE OF BASE
    geomRightBase.vertices.push(
      new THREE.Vector3(0, 0, 0),                  // Bottom left
      new THREE.Vector3(2, 0, 0),                  // Bottom right
      new THREE.Vector3(2, base, 0),               // Top left
      new THREE.Vector3(4, base, 0),               // Top right
      new THREE.Vector3(0, base, -height),          // pointy left
      new THREE.Vector3(2, base, -height),          // pointy right
    );
    geomRightBase.faces.push(
      new THREE.Face3(0, 1, 2),                    // Bottom face
      new THREE.Face3(1, 3, 2),                    // Bottom face
      new THREE.Face3(2, 3, 4),                    // Side face
      new THREE.Face3(3, 5, 4),                    // Side face
      new THREE.Face3(0, 2, 4),                    // Side face
      new THREE.Face3(1, 0, 4),                    // Side face
      new THREE.Face3(1, 4, 3),                    // Side face
      new THREE.Face3(0, 3, 5),                    // Side face
    );
    geomRightBase.computeFaceNormals();
    const rightBase = new THREE.Mesh(geomRightBase, matPlane);
    rightBase.castShadow = true;
    rightBase.receiveShadow = true;
    this.mesh.add(rightBase);

    // RIGHT WING
    const geomRightWing = new THREE.Geometry();
    geomRightWing.vertices.push(
      new THREE.Vector3(2, base, 0),                  // Bottom left
      new THREE.Vector3(2, base-2, 0),                  // Bottom right
      new THREE.Vector3(2+(base*1.5), base, 0),               // Top left
      new THREE.Vector3(2+(base*1.5), base-2, 0),               // Top right
      new THREE.Vector3(0, base, -height),          // pointy left
      new THREE.Vector3(0, base-2, -height),          // pointy right
    );
    geomRightWing.faces.push(
      new THREE.Face3(0, 1, 2),                    // Bottom face
      new THREE.Face3(1, 3, 2),                    // Bottom face
      new THREE.Face3(2, 3, 4),                    // Side face
      new THREE.Face3(3, 5, 4),                    // Side face
      new THREE.Face3(0, 2, 4),                    // Side face
      new THREE.Face3(1, 0, 4),                    // Side face
      new THREE.Face3(1, 4, 3),                    // Side face
      new THREE.Face3(0, 3, 5),                    // Side face
    );
    geomRightWing.computeFaceNormals();
    const rightWing = new THREE.Mesh(geomRightWing, matPlane);
    rightWing.castShadow = true;
    rightWing.receiveShadow = true;
    this.mesh.add(rightWing);
    

    // LEFT SIDE OF BASE
    const geomLeftBase = new THREE.Geometry();
    geomLeftBase.vertices.push(
      new THREE.Vector3(0, 0, 0),                  // Bottom left
      new THREE.Vector3(2, 0, 0),                  // Bottom right
      new THREE.Vector3(-2, base, 0),               // Top left
      new THREE.Vector3(-4, base, 0),               // Top right
      new THREE.Vector3(0, base, -height),          // pointy left
      new THREE.Vector3(-2, base, -height),          // pointy right
    );
    geomLeftBase.faces.push(
      new THREE.Face3(0, 1, 2),                    // Bottom face
      new THREE.Face3(1, 3, 2),                    // Bottom face
      new THREE.Face3(2, 3, 4),                    // Side face
      new THREE.Face3(3, 5, 4),                    // Side face
      new THREE.Face3(0, 2, 4),                    // Side face
      new THREE.Face3(1, 0, 4),                    // Side face
      new THREE.Face3(1, 4, 3),                    // Side face
      new THREE.Face3(0, 3, 5),                    // Side face
    );
    geomLeftBase.computeFaceNormals();
    const leftBase = new THREE.Mesh(geomLeftBase, matPlane);
    leftBase.castShadow = true;
    leftBase.receiveShadow = true;
    this.mesh.add(leftBase);


    // LEFT WING
    const geomLeftWing = new THREE.Geometry();
    geomLeftWing.vertices.push(
      new THREE.Vector3(-4, base-2, 0),                  // Bottom left
      new THREE.Vector3(-4, base, 0),                  // Bottom right
      new THREE.Vector3(-4-(base*1.5), base, 0),               // Top left
      new THREE.Vector3(-4-(base*1.5), base, 0),               // Top right
      new THREE.Vector3(0, base, -height),          // pointy left
      new THREE.Vector3(0, base, -height),          // pointy right
    );
    geomLeftWing.faces.push(
      new THREE.Face3(0, 1, 2),                    // Bottom face
      new THREE.Face3(1, 3, 2),                    // Bottom face
      new THREE.Face3(2, 3, 4),                    // Side face
      new THREE.Face3(3, 5, 4),                    // Side face
      new THREE.Face3(0, 2, 4),                    // Side face
      new THREE.Face3(1, 0, 4),                    // Side face
      new THREE.Face3(1, 4, 3),                    // Side face
      new THREE.Face3(0, 3, 5),                    // Side face
    );
    geomLeftWing.computeFaceNormals();
    const leftWing = new THREE.Mesh(geomLeftWing, matPlane);
    leftWing.castShadow = true;
    leftWing.receiveShadow = true;
    this.mesh.add(leftWing);


    
    // this.mesh.rotateY(0)

    
    
    };