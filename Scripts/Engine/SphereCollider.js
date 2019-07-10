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
		this.center = this.gameObject.mesh.center;
	}
	
	SphereCollision(sphereCollider)
	{
		var radiusSum = this.radius + sphereCollider.radius;
		
		/*var distance = sqrt(pow(this.center.x - sphereCollider.center.x, 2) +
						pow(this.center.y - sphereCollider.center.y, 2) + 
						pow(this.center.z - sphereCollider.center.z, 2));*/
						
		var distance = this.position.distanceTo(sphereCollider.position);
						
		if(distance <= radiusSum){
			return true;
		}else{
			return false;
		}
		//return distance <= radiusSum ? true : false;
	}
}