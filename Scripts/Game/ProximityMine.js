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
		this.tag = "Mine";
		
		this.speed = speed;
		this.radiusFollow = radiusFollow;
		this.radiusIgnite = radiusIgnite;
		
		
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
				
			if(dir.length() < this.radiusIgnite)
			{
				Explocion();
			}
		}
	}

	OnCollisionEnter(collider)
	{
		if(collider.gameObject.tag == "Projectile")
		{
			Instantiate(new Explocion(
				this.mesh.position.x,
				this.mesh.position.y,
				this.mesh.position.z,
				Models[8].clone(),
				GetMaterial("Explocion"),
				0,3,1));
			Destroy(this);
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
	
	Explocion()
	{
		Instantiate(new Explocion(
			this.mesh.position.x,
			this.mesh.position.y,
			this.mesh.position.z,
			Models[8].clone(),
			GetMaterial("Explocion"),
			0,10,1));
		Destroy(this);
	}
}