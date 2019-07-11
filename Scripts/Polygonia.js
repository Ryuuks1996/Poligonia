var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var inputManager = new InputManager();
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



function SetScene(id)
{
	switch(id)
	{
		case 0:
			this.scene = new MainMenu();
			break;
		case 1:
			this.scene = new GameScene();
			break;	
		case 2:
			//this.scene = new Options();
			break;
		case 3:
			//this.scene = new Instructions();
			break;	
	}
}

function Instantiate(gameObjet)
{
	this.scene.AddGameObject(gameObjet);
}

function InstantiateHUD(gameObjet)
{
	
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
	SetScene(0);	
	//this.gameScene = new GameScene();
	//this.mainMenu = new MainMenu();
	//this.options = new Options();
	//this.instructions = new Instructions();

}

function Loop()
{
	requestAnimationFrame(Loop, 1000 / 60);
	this.controller.Update();	
	this.scene.Update();	
	this.scene.Draw(this.renderer);
}

requestAnimationFrame(Loop, 1000 / 60);