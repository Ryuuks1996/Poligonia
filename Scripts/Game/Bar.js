class Bar
{
	constructor(x,y,scene,w,h,texturesBar /*array*/)
	{
		this.value = 0;
		this.textures = texturesBar;
		this.active = false;
		
		this.buttonRSelector = new CanvasObject(x + (w/2),y,scene,GetMaterial("Derecha_Selector"),h,h);
		this.buttonR = new CanvasObject(x + (w/2),y,scene,GetMaterial("Derecha"),h,h);
		this.barra = new CanvasObject(x,y,scene,this.textures[0],w -(2*h),h);
		this.buttonLSelector = new CanvasObject(x - (w/2),y,scene,GetMaterial("Izquierda_Selector"),h,h);
		this.buttonL = new CanvasObject(x - (w/2),y,scene,GetMaterial("Izquierda"),h,h);
	}
	
	SetValue(v)
	{
		if(v >= 0 && v < this.textures.length)
		{
			console.log(this.textures[v]);
			this.value = v;
			this.barra.mesh.material.map = this.textures[v].map; // error <-----
		}
	}
	
	Update()
	{
		
		if(this.active == true)
		{
			this.buttonRSelector.mesh.visible = true;
			this.buttonLSelector.mesh.visible = true;
		}
		else
		{
			this.buttonRSelector.mesh.visible = false;
			this.buttonLSelector.mesh.visible = false;
		}
		
		if(this.value >= this.textures.length)
		{
			this.buttonR.mesh.visible = false;
			this.buttonRSelector.mesh.visible = false;
		}
		else
		{
			this.buttonR.mesh.visible = true;
			this.buttonRSelector.mesh.visible = true;
		}
		
		if(this.value <= 0)
		{
			this.buttonL.mesh.visible = false;
			this.buttonLSelector.mesh.visible = false;
		}
		else
		{
			this.buttonL.mesh.visible = true;
			this.buttonLSelector.mesh.visible = true;
		}
	}
}