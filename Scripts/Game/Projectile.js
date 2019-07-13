class Projectile extends GameObject
{
	constructor(x,y,z,obj3D,material, damage, speed, lifeSpan)
	{
		super(x,y,z,obj3D,material);
		
		this.AddBehaviors(new MovementController(this,0.1,0,10));
		this.lifeSpan = lifeSpan;
		this.time = 0;
		this.damage = damage;
	}
	
	Update()
	{
		super.Update();
		this.time += time.DeltaTime();
		if(this.time >= this.lifeSpam)
		{
			Destroy(this);
		}
	}

	OnCollisionEnter(collider)
	{
		if(collider.gameObject.tag == "Asteroid" && (!collider.gameObject.destroyed))
		{
			collider.gameObject.GetDamage(this.damage);
		}
		else if(collider.gameObject.tag == "Mine" && (!collider.gameObject.destroyed))
		{
			collider.gameObject.GetDamage(this.damage);
		}
		if(collider.gameObject.tag != "player")
		{
			Destroy(this);
		}
	}
}