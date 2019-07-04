class GameScene
{
	
	constructor()
	{
		this.gameObjects = [];
		
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		
		
		this.skyBox = TextureLoader.load([
			'Assets2D/Background/sky_02.jpg',
			'Assets2D/Background/sky_05.jpg',
			'Assets2D/Background/sky_06.jpg',
			'Assets2D/Background/sky_07.jpg',
			'Assets2D/Background/sky_08.jpg',
			'Assets2D/Background/sky_10.jpg',
		  ]);		  
		this.scene.background = this.skyBox;
	}
	
	Update()
	{
		for(var i = 0 ; i < this.gameObjects.length ; i++)
		{
			this.gameObjects[i].Update();
		}
	}
	
	Draw( buffer )
	{
		buffer.render(this.scene,this.camera);
	}
}