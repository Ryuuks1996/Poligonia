class ProximityMine extends GameObject
{
	constructor(x, y, z, obj3D, material, radiusFollow, radiusIgnite,speed)
	{
		super(x, y, z, obj3D, material);
		
		this.materials = [];
		this.materials.push(GetMaterial("Material_Bomb_Off"));
		this.materials.push(GetMaterial("Material_Bomb_On"));
		this.state = 0;
		this.t = 0;
		
		this.speed = speed;
		this.radiusFollow = radiusFollow;
		this.radiusIgnite = radiusIgnite;
		this.radiusExplosion = radiusExplosion;
		
		
		AddBehaviors(new SphereCollider(this, this.radiusFollow));
	}
		
	OnCollisionStay(collider)
	{
		super.OnCollisionStay(collider);
		
		this.Animation();		
		
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
	
	Animation()
	{
		this.t += time.DeltaTime();
		if(this.t >= 0.7)
		{
			this.t = 0;
			if(state == 0)
			{
				this.mesh.material.map = this.materials[1].map;
			}
			else
			{
				this.mesh.material.map = this.materials[0].map;
			}
		}

	}
	
	Explocion(initialSize, finalSize)
	{
		var explosion = new Explocion(this.gameObject.mesh.position.x,
			this.gameObject.mesh.position.y, this.gameObject.mesh.position.z,
			this.gameObject.mesh, this.gameObject.mesh.material, initialSize, finalSize);
			Destroy(this);
	}
}