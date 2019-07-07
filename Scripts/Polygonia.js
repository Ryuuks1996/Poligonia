var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var time = new THREE.Clock();

var CubeTextureLoader = new THREE.CubeTextureLoader();
var AudioLoader = new THREE.AudioLoader();

function Destroy(scene,mesh)
{
	mesh.geometry.dispose();
	scene.remove(mesh);
	mesh.dispose();
	delete(mesh);
}

function PlayAudio(path,loop)
{
	if(!loop)
	{
		AudioLisener.load();
	}
}

Init();
Loop();

function Init()
{	
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
	
	//GAME
	this.gameScene = new GameScene();
}

function Loop()
{
	requestAnimationFrame(Loop, 1000 / 60);
	this.controller.Update();	
	this.gameScene.Update();
	
	this.gameScene.Draw(this.renderer);
}

requestAnimationFrame(Loop, 1000 / 60);