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

		this.nitro = new BarLife(this.sceneHUD,"Barra_Nitro_",6,-(window.innerWidth/2)+160,-(window.innerHeight/2)+50,300,75);
		this.lifeCounter = new LifeCounter(this.sceneHUD,GetMaterial("Icon_PlayerLife"),60,-(window.innerWidth/2)+50,-(window.innerHeight/2)+150,80,3);
		this.especialAttackCounter = new LifeCounter(this.sceneHUD,GetMaterial("Icon_Potenciador"),30,-(window.innerWidth/2)+30,-(window.innerHeight/2)+220,40,6);
		
		this.player = new Player(0, -10, 0, Models[0].clone(), GetMaterial("Material_Ship"),5,15,2,0.5,3,this.nitro,this.lifeCounter,this.especialAttackCounter);
		
		this.barLife = new BarLife(this.sceneHUD,"Vida_Core_",11,0,(window.innerHeight/2) -80,600,100);
		this.core = new Core(100, Models[4], GetMaterial("City"),this.barLife);
		this.AddGameObject(this.player);
		this.AddGameObject(this.core);

		
		this.altimetro = new Altimetro(this.sceneHUD,this.player);
		this.miniMap = new MiniMap(this.sceneHUD,100);
		this.AddMiniMap(this.player,"Icon_MiniMap_Player",30);
		this.AddMiniMap(this.core,"Icon_MiniMap_Core",30);
		
		this.waveController = new WaveController(new THREE.Vector3(0,0,0),4,1.1,[0.25,0.6,0.9],500,30);
		
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
			//this.AddMiniMap(gameObject,"Icon_MiniMap_Core",40);
		}
	}

	RemoveGameObject(object)
	{
		super.RemoveGameObject(object);
		this.miniMap.RemoveTarget(object);
	}
}



