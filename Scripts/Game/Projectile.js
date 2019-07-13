class Projectile extends GameObject
{
	constructor(x,y,z,obj3D,material, damage, speed, lifeSpan)
	{
		super(x,y,z,obj3D,material);
		this.tag = "Projectile";
		this.damage = damage;
		this.lifeSpan = lifeSpan;
		this.time = 0;

		this.AddBehaviors(new MovementController(this,speed,0,speed));
		this.AddBehaviors(new MovementController(this,1));
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
			console.log("hit");
			collider.gameObject.GetDamage(this.damage);
		}
		if(collider.gameObject.tag != "player"  && (!collider.gameObject.destroyed))
		{
			Destroy(this);
		}
	}
}