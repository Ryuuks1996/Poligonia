class Bar
{
	constructor(x,y,scene,w,h,texturesBar /*array*/)
	{
		this.value = 0;
		this.textures = texturesBar;
		this.active = false;
		
		this.buttonRSelector = new CanvasObject(x + (w/2),y,scene,GetMaterial("Derecha_Selector"),h,h);
		this.buttonR = new CanvasObject(x + (w/2),y,scene,GetMaterial("Derecha"),h,h);
		this.bar = new CanvasObject(x,y,scene,this.textures[0],w -(2*h),h);
		this.buttonLSelector = new CanvasObject(x - (w/2),y,scene,GetMaterial("Izquierda_Selector"),h,h);
		this.buttonL = new CanvasObject(x - (w/2),y,scene,GetMaterial("Izquierda"),h,h);
	}
	
	SetValue(value)
	{
		if(this.value >= 0 && this.value < this.textutes.length())
		{
			this.bar.mesh.material.texture = this.textures[value];
		}
	}
	
	Update()
	{
		if(this.active == true)
		{
			this.buttonRSelector.mesh.visible =true;
			this.buttonLSelector.mesh.visible = true;
		}
		else
		{
			this.buttonRSelector.mesh.visible =true;
			this.buttonLSelector.mesh.visible = true;
		}
		
		if(this.value >= this.textures.length())
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