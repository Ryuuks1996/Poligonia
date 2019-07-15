class BarLife
{
	constructor()
	{
		this.textures = [];
		for(var i = 0; i < 11; i++)
		{
			this.textures.push(GetMaterial("Vida_Core_"+i));
		}
		
		this.barra = new CanvasObject(x,y,scene,this.textures[0],w,h);
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
		
	}
}