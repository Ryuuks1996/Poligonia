var OBJLoader =  new THREE.OBJLoader();

var Models = [];

//0 -> Player Ship
OBJLoader.load('Models3D/Ship.obj',
	function ( object ) {Models[0] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

//1 -> Small Asteroid
OBJLoader.load('Models3D/SmallAsteroid.obj',
	function ( object ) {Models[1] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

//2 -> Medium Asteroid
OBJLoader.load('Models3D/MediumAsteroid.obj',
	function ( object ) {Models[2] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

//3 -> Big Asteroid
OBJLoader.load('Models3D/BigAsteroid.obj',
	function ( object ) {Models[3] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

OBJLoader.load('Models3D/ciudad.obj',
	function ( object ) {Models[4] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

OBJLoader.load('Models3D/laser.obj',
	function ( object ) {Models[5] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

OBJLoader.load('Models3D/laser2.obj',
	function ( object ) {Models[6] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

OBJLoader.load('Models3D/laser3.obj',
	function ( object ) {Models[7] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

OBJLoader.load('Models3D/Explocion.obj',
	function ( object ) {Models[8] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);

OBJLoader.load('Models3D/Plasma.obj',
	function ( object ) {Models[9] = object;},
	function ( xhr ) {/*console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );*/},
	function ( error ) {console.log( 'An error happened' );}
);
/*
function LoadObj(path,obj)
{
	OBJLoader.load(path,
		function ( object ) {obj = object;},
		function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
		function ( error ) {console.log( 'An error happened' );});
}
*/