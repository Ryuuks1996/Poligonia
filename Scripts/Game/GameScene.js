class GameScene extends Scene
{
	constructor()
	{
		super();
		
		this.skyBox = CubeTextureLoader.load([
			'Assets2D/Background/sky_02.png',
			'Assets2D/Background/sky_10.png', 
			'Assets2D/Background/sky_06.png', 
			'Assets2D/Background/sky_08.png',
			'Assets2D/Background/sky_07.png', 
			'Assets2D/Background/sky_05.png' 
		 ]);		  
		this.scene.background = this.skyBox;
		
		this.camera.position.z = -20;
		this.light = new THREE.AmbientLight(0xffffff); this.scene.add(this.light);

		this.player = new Player(0, -10, 0, Models[0].clone(), GetMaterial("Material_Ship"),10,20,1,0.2);
		this.core = new Core(100, Models[5].clone(), undefined);
		this.AddGameObject(this.player);
		this.AddGameObject(this.core);

		
		this.altimetro = new Altimetro(this.sceneHUD,this.player);
		this.miniMap = new MiniMap(this.sceneHUD,100);
		this.AddMiniMap(this.player,"Icon_MiniMap_Player",30);
		
		this.waveController = new WaveController(new THREE.Vector3(0,0,0),5,1.1,[0.2,0.6,0.8],500,10);
		
	}
	
	Update()
	{
		super.Update();
		
		this.miniMap.Update();
		this.altimetro.Update();
		this.waveController.Update();
		var playerDir = new THREE.Vector3(0,0,0);
		this.player.mesh.getWorldDirection(playerDir);
		var playerPos = this.player.mesh.position;
		var playerUp = this.player.mesh.up;

		
		this.camera.position.set(
		playerPos.x + playerDir.x * -40,
		playerPos.y + playerDir.y * -40,
		playerPos.z + playerDir.z * -40);

		
		this.camera.lookAt(playerPos);
		collisionManager.Update();
	}
	
	Draw( buffer )
	{
		super.Draw(buffer);
	}
	
	AddMiniMap(object,materialTag,size)
	{
		this.miniMap.AddTarget(object,materialTag,size);
	}

	AddGameObject(gameObject)
	{
		super.AddGameObject(gameObject);
		if(gameObject.tag == "Asteroid")
		{
			this.AddMiniMap(gameObject,"Icon_MiniMap_Asteroid",20);
		}
		else if(gameObject.tag == "Mine")
		{
			this.AddMiniMap(gameObject,"Icon_MiniMap_Mine",20);
		}
		else if(gameObject.tag == "Core")
		{
			// saca null no se porque
			this.AddMiniMap(gameObject,"Icon_MiniMap_Core",40);
		}
	}

	RemoveGameObject(object)
	{
		super.RemoveGameObject(object);
		this.miniMap.RemoveTarget(object);
	}
}



