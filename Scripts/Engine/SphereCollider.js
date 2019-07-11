class SphereCollider extends Behavior
{
	constructor(gameObject, center, radius)
	{
		super(gameObject);
		this.position = new THREE.Vector3(this.gameObject.x, this.gameObject.y, this.gameObject.z);
		
		this.center = center;
		this.radius = radius;
		this.collisionEnters = [];
		this.collisionStays = [];
		this.collisionExit = [];
	}
	
	Update()
	{
		super.Update();
		this.center = this.gameObject.mesh.center;
	}
	
	CheckListContainSphere(list, sphereCollider)
	{
		for(int i = 0; i < list.length; i++)
		{
			if(list[i] == sphereCollider)
				return true;
		}
		
		return false;
	}
	
	CheckCollision(sphereCollider)
	{
		var radiusSum = this.radius + sphereCollider.radius;
		var distance = this.position.distanceTo(sphereCollider.position);
		
		if(distance <= radiusSum){
			return true;
		} else {
			return false;
		}
		//return distance <= radiusSum ? true : false;
	}
}