class CollisionManager
{
	constructor()
	{
		this.colliders = [];
	}
	
	Update()
	{
		for(var i = 0; i < this.colliders.length; i++)
		{
			for(var j = 0; j < this.colliders.length; j++)
			{
				if(i != j)
				{
					this.colliders[i].CheckCollision();
				}
			}
		}
	}
}