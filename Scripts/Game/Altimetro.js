class Altimetro
{
	constructor(scene,target)
	{
		this.scene = scene;
		this.target = target;
		
		this.factorScale = 1;
		this.offsetCenter = new THREE.Vector3((window.innerWidth/2)-50,-(window.innerHeight/2)+150,0);
		this.MiniMapBackground = new CanvasObject(this.offsetCenter.x,this.offsetCenter.y,this.scene,GetMaterial("Background_Altimetro"),20,200);
		this.icon = new CanvasObject(this.offsetCenter.x,this.offsetCenter.y,this.scene,GetMaterial("Puntero_Altimetro"),20,20);
		
		this.radius = 100;		
	}
	
	Update()
	{
		var pos = this.target.mesh.position.clone();
		if(pos.y <= -this.radius)
		{
			this.icon.SetPosition(
				this.offsetCenter.x,
				this.offsetCenter.y + this.radius,
				0);	
		}
		else if(pos.y >= this.radius)
		{
			this.icon.SetPosition(
				this.offsetCenter.x,
				this.offsetCenter.y - this.radius,
				0);	
		
		}
		else
		{
			this.icon.SetPosition(
			this.offsetCenter.x,
			this.offsetCenter.y + (pos.y * this.factorScale),
			0);
		}
	}
}