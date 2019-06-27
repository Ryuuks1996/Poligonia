var scene, controls;

init();

var init = function()
{
	//SCENE
	scene = new THREE.Scene();
	
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	
	//RENDERER
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setSize(WIDTH, HEIGHT);
	document.body.appendChild(renderer.domElement);
	
	//CAMERA
	camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
	camera.position.set(0,0,30);
	
	scene.add(camera);
	renderer.setClearColor(0x333F47, 1);
	
	//RESIZE RENDERER BY BROWSER WINDOW
	window.addEventListener('resize', function()
	{
		var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;
		renderer.setSize(WIDTH, HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
    });
}

var update = function()
{
	requestAnimationFrame(update);
}

var animate = function() 
{
	renderer.render( scene, camera );
	controls.update();
}