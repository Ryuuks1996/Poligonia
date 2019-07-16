class Projectile extends GameObject
{
	constructor(x,y,z,obj3D,material, damage, speed, lifeSpan)
	{
		console.log("a");
		super(x,y,z,obj3D,material);
		this.tag = "Projectile";
		this.damage = damage;
		this.lifeSpan = lifeSpan;
		this.time = 0;
		console.log("b");

		this.AddBehaviors(new MovementController(this,speed,0,this.speed));
		this.AddBehaviors(new SphereCollider(this,2));
		
		console.log("c");
	}
	
	Update()
	{
		super.Update();	
		this.time += time.DeltaTime();
		if(this.time >= this.lifeSpan)
		{
			Destroy(this);
		}	
	}

	OnCollisionEnter(collider)
	{
		if(collider.gameObject.tag == "Asteroid"  && (!collider.gameObject.destroyed))
        {
			collider.gameObject.GetDamage(this.damage);
			Instantiate(new Explocion(
				this.mesh.position.x,
				this.mesh.position.y,
				this.mesh.position.z,
				Models[8].clone(),
				GetMaterial("Explocion"),
				0,2,1));
		}
		if(collider.gameObject.tag != "player")
		{
			console.log("here");
			Destroy(this);
		}
	}
}