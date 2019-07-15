class BarLife
{
	constructor(scene,tag,n,x,y,w,h)
	{
		this.textures = [];
		for(var i = 0; i < n; i++)
		{
			this.textures.push(GetMaterial(tag+i));
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