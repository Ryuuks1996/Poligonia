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
		this.player = new Player(0,-10,0,this.scene,Models[0],Materials[0]);

		this.iconPlayer = new CanvasObject(0,0,this.sceneHUD,Materials[0],200,200);
		
	}
	
	Update()
	{
		super.Update();
	}
	
	Draw( buffer )
	{
		super.Draw(buffer);
	}
}



