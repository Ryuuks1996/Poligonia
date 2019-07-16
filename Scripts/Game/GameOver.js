class GameOver extends Scene
{
	constructor()
	{
		super();
		
		//this.scoreTextMesh = this.InitScoreText();
		//this.scoreTextMesh.position.set(0,0,0);
		
		this.Background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		this.title = new CanvasObject(0,200,this.sceneHUD,GetMaterial("Game_Over"),700,150);
		this.back = new CanvasObject(0,-200,this.sceneHUD,GetMaterial("Press_Back"),700,400);
		//this.score = new CanvasObject(0,200,this.sceneHUD,GetMaterial("Score"),200,90);
		
		//this.sceneHUD.add(this.scoreTextMesh);
	}
	
	Update()
	{
		super.Update();
		/*
		this.score+=score;
		this.sceneHUD.remove(this.scoreTextMesh);
		this.scoreTextMesh = this.InitScoreText();
		this.scoreTextMesh.position.set(0,0,0);
		this.sceneHUD.add(this.scoreTextMesh);
		*/
		if(inputManager.GetInputDown("Enter") || inputManager.GetInputDown("Trigger"))
		{
			SetScene(0);
		}
		
	
	}
	
	InitScoreText()
	{
		var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.font = "30px Arial";
		context1.fillStyle = "#ff0000";
		context1.fillText('asdsad'+ score, 50, 50);	
		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;		
		var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
		material1.transparent = true;
		var textMesh = new THREE.Mesh(new THREE.PlaneGeometry(300,200),material1);
		textMesh.needsUpdate = true;
		return textMesh;
	}

}