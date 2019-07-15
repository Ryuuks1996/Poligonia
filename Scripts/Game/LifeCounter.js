class LifeCounter
{
	constructor(player,scene)
	{
		this.Lifes = [];
		for(var i = 0; i< 3; i++)
		{
			this.Lifes.push(new CanvasObject(-(window.innerWidth/2)+50 + i*80,(window.innerHeight/2)-50,scene,GetMaterial("Icon_PlayerLife"),60,60));
		}
	}
	
	Update()
	{
		
	}
	
	SetValue(n)
	{
		for(var i = 0; i< 3; i++)
		{
			this.Lifes[i].mesh.visible = false;
		}
		
		for(var i = 0; i< n; i++)
		{
			this.Lifes[i].mesh.visible = true;
		}
	}
}