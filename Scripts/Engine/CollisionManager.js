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
					this.colliders[i].CheckCollision(this.colliders[j]);
				}
			}
		}
	}

	Add(collider)
	{
		this.colliders.push(collider);
	}

	Remove(collider)
	{
		for(var i = 0; i < this.colliders.length; i++)
		{
			if(this.colliders[i] === collider)
			{
				this.colliders.splice(i,1);
			}
		}
	}
}

var collisionManager = new CollisionManager();