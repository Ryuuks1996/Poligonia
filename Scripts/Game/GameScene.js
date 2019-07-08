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
		
		this.player = new Player(0,-10,0,this.scene,Models[0],GetMaterial("Material_Ship"));
		this.gameObjects.push(this.player);
		
		this.miniMap = new MiniMap(this.sceneHUD);
		this.miniMap.AddTarget(this.player,"Material_Ship",20);
		
		this.waveController = new WaveController(new THREE.Vector3(0,0,0),10,this.scene,1.1,[0.2,0.6,0.8],[0.002,0.006,0.008],5,40000);
		
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
	}
	
	Draw( buffer )
	{
		super.Draw(buffer);
	}
}



