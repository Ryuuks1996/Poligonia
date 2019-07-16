class LifeCounter
{
	constructor(scene,material,size,x,y,delta,n)
	{
		this.max = n;
		this.Lifes = [];
		for(var i = 0; i< n; i++)
		{
			this.Lifes.push(new CanvasObject(x + i*delta,y,scene,material,size,size));
		}
	}
	
	Update()
	{
		
	}
	
	SetValue(n)
	{
		for(var i = 0; i< this.max; i++)
		{
			this.Lifes[i].mesh.visible = false;
		}
		
		for(var i = 0; i< n; i++)
		{
			this.Lifes[i].mesh.visible = true;
		}
	}
}