class CollisionManager
{
	constructor(sphereColliders)
	{
		this.sphereColliders = sphereColliders;
	}
	
	Update()
	{
		for(int i = 0; i < this.sphereColliders.length; i++)
		{
			for(int j = 1; j < this.sphereColliders.length; j++)
			{
				var isCollision = this.sphereColliders[i].CheckCollision(this.sphereColliders[j]);
				if(isCollision)
				{
					var isEnterCollision = this.sphereColliders[i].CheckListContainSphere(
						this.sphereColliders[i].collisionEnters, this.sphereColliders[i]);
			
					if(!isEnterCollision)
					{
						var isStayCollision = this.sphereColliders[i].CheckListContainSphere(
							this.sphereColliders[i].collisionStays, this.sphereColliders[i]);
						
						if(!isStayCollision)
							this.sphereColliders[i].collisionEnters.add(this.sphereColliders[i]);
					}
				}
			}
		}
	}
}