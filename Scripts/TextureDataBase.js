var TextureLoader = new THREE.TextureLoader();

Materials = [];

var texture = TextureLoader.load('Assets2D/Ship.jpg');
//var texture = THREE.ImageUtils.loadTexture('Assets2D/Ship.jpg');
Materials[0] = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});

/*
for(var i in globalObject.children)
{
	var texture = TextureLoader.load('Assets2D/Ship.png');
	//var texture = THREE.ImageUtils.loadTexture('path/to/image.jpg');
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	globalObject.children[i].material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
} // end apply to Mesh of interest
*/