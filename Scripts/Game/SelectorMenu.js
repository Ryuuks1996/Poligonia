class SelectorMenu extends CanvasObject
{
	constructor(x, y, scene, material, w, h)
	{
		super(x, y, scene, material, w, h);
		
		this.idPos = 0;
		this.positions = []; 
	}
	
	Update()
	{
			if(inputManager.GetInput("Up"))
			{
				this.Move(-1);
			}
			
			if(inputManager.GetInput("Down"))
			{
				this.Move(1);
			}
	}
	
	Move(steps)
	{
		if(this.idPos + steps < this.positions.length && this.idPos + steps >= 0)
		{
			this.idPos += steps;
			var pos = this.positions[this.idPos];
			this.SetPosition(pos.x,pos.y,pos.z);
		}
	}
	
	AddPosition(vec3)
	{
		this.positions.push(vec3);
	}
	
}