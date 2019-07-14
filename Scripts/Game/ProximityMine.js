class ProximityMine extends GameObject
{
	constructor(x, y, z, obj3D, material, radiusFollow, radiusIgnite,speed)
	
		super(x, y, z, obj3D, material);
		
		this.speed = speed;
		this.radiusFollow = radiusFollow;
		this.radiusIgnite = radiusIgnite;
		this.radiusExplosion = radiusExplosion;
		
		this.center = this.mesh.position;
		
		AddBehaviors(new SphereCollider(this, this.radiusFollow));
	}
		
	OnCollisionEnter(collider)
	{
		super.OnCollisionEnter();
		
		if(collider.gameObject.tag == "Player")
		{
			var dir = new THREE.Vector3(
			collider.gameObject.mesh.position.x - this.mesh.position.x,
			collider.gameObject.mesh.position.y - this.mesh.position.y,
			collider.gameObject.mesh.position.z - this.mesh.position.z);
			
			var dirN = dir1.clone().normalize();
			
			this.Translate( new THREE.Vector3(
				dirN.x * this.speed * time.DeltaTime(),
				dirN.y * this.speed * time.DeltaTime(),
				dirN.z * this.speed * time.DeltaTime()
				));
				
			if(dir.length() < radiusIgnite)
			{
				Explocion();
			}
		}
		
	}
	
	Explocion()
	{
		//Instantitate();
	}
}