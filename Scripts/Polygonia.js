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

function Destroy(gameObject)
{
	gameObject.destroyed = true;
	for(var i = 0; i < gameObject.behaviors.length; i++)
	{
		gameObject.behaviors[i].Destroy();
	}
	gameObject.mesh.geometry.dispose();
	gameObject.mesh.material.dispose();
	this.scene.scene.remove(gameObject.mesh);
	gameObject.mesh = undefined;
	delete(gameObject);
}

function FindGameObjects(tag)
{
	var objects = [];
	for(var i = 0; i < this.scene.gameObjects.length; i++)
	{
		if(this.scene.gameObjects[i].tag == tag)
		{
			objects.push(this.scene.gameObjects[i]);
		}
	}
	return objects;
}

function FindGameObject(tag)
{
	for(var i = 0; i < this.scene.gameObjects.length; i++)
	{
		if(this.scene.gameObjects[i].tag == tag)
		{
			return(this.scene.gameObjects[i]);
		}
	}
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
	time.Update();
	this.controller.Update();	
	this.scene.Update();	
	this.scene.Draw(this.renderer);
}

requestAnimationFrame(Loop, 1000 / 60);