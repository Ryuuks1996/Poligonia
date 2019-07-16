class GameOver extends Scene
{
	constructor()
	{
		this.scoreTextMesh = this.InitScoreText();
		this.scoreTextMesh.position.set(0,0,0);
		this.sceneHUD.add(this.scoreTextMesh);
	}
	
	Update()
	{
		super.Update();
		
		this.score+=score;
		this.sceneHUD.remove(this.scoreTextMesh);
		this.scoreTextMesh = this.InitScoreText();
		this.scoreTextMesh.position.set(0,0,0);
		this.sceneHUD.add(this.scoreTextMesh);
	}
	
	InitScoreText()
	{
		var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.fillStyle = "#000000";
		context1.fillText('Score: ' + this.score, 50, 50);	
		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;		
		var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
		material1.transparent = true;
		var textMesh = new THREE.Mesh(new THREE.PlaneGeometry(22,14),material1);
		textMesh.needsUpdate = true;
		return textMesh;
	}

}