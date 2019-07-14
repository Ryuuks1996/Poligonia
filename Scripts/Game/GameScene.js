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
		//this.light = new THREE.AmbientLight( 0x404040 ); // soft white light
		//this.scene.add( this.light );
		
		//this.core = new Core(100, undefined, undefined);
		//this.player = new Player(0, -10, 0, Models[0], GetMaterial("Material_Ship"),10,20,1,1,0.5,1);
		this.player = new Player(0, -10, 0, Models[0], GetMaterial("Material_Ship"),10,20,1,0.2);
		this.core = new Core(100, undefined, undefined);
		this.AddGameObject(this.player);
		this.AddGameObject(this.core);
		
		this.miniMap = new MiniMap(this.sceneHUD,100);
		this.AddMiniMap(this.player,"Material_Ship",20);
		//this.miniMap.AddTarget(this.player,"Material_Ship",20);
		
		this.waveController = new WaveController(new THREE.Vector3(0,0,0),5,1.1,[0.2,0.6,0.8],500,10);
		
	}
	
	Update()
	{
		super.Update();
		
		this.miniMap.Update();
		this.waveController.Update();
		var playerDir = new THREE.Vector3(0,0,0);
		this.player.mesh.getWorldDirection(playerDir);
		var playerPos = this.player.mesh.position;
		var playerUp = this.player.mesh.up;

		
		this.camera.position.set(
		playerPos.x + playerDir.x * -30 + playerUp.x * 10,
		playerPos.y + playerDir.y * -30 + playerUp.y * 10,
		playerPos.z + playerDir.z * -30 + playerUp.z * 10);

		
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
			{this.AddMiniMap(gameObject,"Material_Ship",gameObject.size*5);}
	}

	RemoveGameObject(object)
	{
		super.RemoveGameObject(object);
		this.miniMap.RemoveTarget(object);
	}
}



