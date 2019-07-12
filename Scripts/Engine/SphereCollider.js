class SphereCollider extends Behavior
{
	constructor(gameObject)
	{
		super(gameObject);
		this.position = new THREE.Vector3(this.gameObject.mesh.position.x, 
										this.gameObject.mesh.position.y, 
										this.gameObject.mesh.position.z);
		
		this.center = this.gameObject.mesh.center;
		var scale = this.gameObject.mesh.getWorldScale(scale);
		//console.log(scale);
		this.radius = Math.ceil((scale.x + scale.y + scale.z)/3);
		this.collisionEnters = [];
		this.collisionStays = [];
		this.collisionExit = [];
		collisionManager.Add(this);
	}
	
	Update()
	{
		super.Update();
		this.center = this.gameObject.mesh.center;
		for(var i = 0; i < this.collisionEnters.length; i++)
		{
			this.gameObject.OnCollisionEnter(this.collisionEnters[i]);
		}
		for(var i = 0; i < this.collisionStays.length; i++)
		{
			this.gameObject.OnCollisionStay(this.collisionStays[i]);
		}
		for(var i = 0; i < this.collisionExit.length; i++)
		{
			this.gameObject.OnCollisionExit(this.collisionExit[i]);
			this.collisionExit.splice(i,1);
		}
	}
	
	RemoveCollider(list, collider)
	{
		for(var i = 0; i < list.length; i++)
		{
			if(list[i] === collider)
				list.splice(i,1);
		}
	}
	
	CheckCollision(collider)
	{
		var radiusSum = this.radius + collider.radius;
		var distance = this.center.distanceTo(collider.center);
		
		this.AddCollision(collider, distance <= radiusSum);
	}

	
	AddCollision(collider, collision)
	{
		if(collision)
		{
			if(this.collisionEnters.includes(collider))
			{
				this.collisionStays.push(collider);
				this.RemoveCollider(this.collisionEnters,collider);
			}
			else
			{
				this.collisionEnters.push(collider);
			}
		}
		else
		{
			if(this.collisionEnters.includes(collider) || this.collisionStays.includes(collider))
			{
				this.collisionExit.push(collider);
				this.RemoveCollider(this.collisionEnters,collider);
				this.RemoveCollider(this.collisionStays,collider);
			}
		}
	}

	Destroy()
	{
		collisionManager.Remove(this);
		delete(this);
	}
}