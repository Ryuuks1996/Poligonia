class Bar
{
	constructor(x,y,scene,w,h,texturesBar /*array*/)
	{
		this.value = 0;
		this.textures = texturesBar;
		this.active = false;
		
		this.buttonR = new CanvasObject(x + (w/2),y,scene,GetMaterial("Derecha"),h,h);
		this.barra = new CanvasObject(x,y,scene,this.textures[0],w -(2*h),h);
		this.buttonL = new CanvasObject(x - (w/2),y,scene,GetMaterial("Izquierda"),h,h);
	}
	
	SetValue(v)
	{
		if(v >= 0 && v < this.textures.length)
		{
			this.value = v;
			this.barra.mesh.material.map = this.textures[v].map;
		}
	}
	
	Update()
	{
		if(this.active == true)
		{
			this.buttonL.mesh.visible = true;
			this.buttonR.mesh.visible = true;
		}
		else
		{
			this.buttonL.mesh.visible = false;
			this.buttonR.mesh.visible = false;
			return;
		}
		
		if(this.value >= this.textures.length -1)
		{
			this.buttonR.mesh.visible = false;
		}
		else
		{
			this.buttonR.mesh.visible = true;
		}
		
		if(this.value <= 0)
		{
			this.buttonL.mesh.visible = false;
		}
		else
		{
			this.buttonL.mesh.visible = true;
		}
	}
}