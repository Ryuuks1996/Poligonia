var scene;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var ObjectLoader = new THREE.OBJLoader();

function Destroy(scene,mesh)
{
	mesh.geometry.dispose();
	scene.remove(mesh);
	mesh.dispose();
	delete(mesh);
}

Init();
Loop();

function Init()
{
	//SCENE
	scene = new THREE.Scene();
	
	//RENDERER
	this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
	this.renderer.autoClear = false;
	this.renderer.setSize(WIDTH, HEIGHT);
	this.renderer.shadowMap.enabled = true;
	this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.body.appendChild(this.renderer.domElement);
	
	//RESIZE RENDERER BY BROWSER WINDOW
	window.addEventListener('resize', function()
	{
		WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;
		this.renderer.setSize(WIDTH, HEIGHT);
    });
	
	//CONTROLLERS
	this.controller = new Controller();
}

function Loop()
{
	requestAnimationFrame(Loop, 1000 / 60);
	controller.Update();
	

}

requestAnimationFrame(Loop, 1000 / 60);