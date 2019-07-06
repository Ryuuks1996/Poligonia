var OBJLoader =  new THREE.OBJLoader();

var Models = [];

OBJLoader.load('Models3D/Ship.obj',
	function ( object ) {Models[0] = object;},
	function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
	function ( error ) {console.log( 'An error happened' );});
	
OBJLoader.load('Models3D/Meteoro.obj',
	function ( object ) {Models[1] = object;},
	function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
	function ( error ) {console.log( 'An error happened' );});
	

/*
function LoadObj(path,obj)
{
	OBJLoader.load(path,
		function ( object ) {obj = object;},
		function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
		function ( error ) {console.log( 'An error happened' );});
}
*/