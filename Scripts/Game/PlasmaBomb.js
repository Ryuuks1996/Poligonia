class PlasmaBomb extends GameObject
{
	constructor(x, y, z, obj3D, material, initialRadius, finalRadius, duration)
	{
		super(x, y, z, obj3D, material);
		
		this.initialRadius = initialRadius;
		this.finalRadius = finalRadius;

		this.startTime = time.ElapsedTime();
        this.duration = duration;
        
        this.sphereCollider = new SphereCollider(this, this.initialRadius);
        this.AddBehaviors(this.sphereCollider);
	}

	Update()
	{
		super.Update();
		if(!this.destroyed)
		{
			var t = time.ElapsedTime() - this.startTime;		
			var value = THREE.Math.lerp(this.initialRadius, this.finalRadius, t/this.duration);
            this.mesh.scale.set(value,value,value);
            this.sphereCollider.radius = value;

			if(t >= this.duration)
			{
				Destroy(this);
			}
		}
    }
    
    OnCollisionEnter(collider)
    {
        if(collider.gameObject.tag == "Asteroid" || collider.gameObject.tag == "Mine")
        {
            Destroy(collider.gameObject);
        }
    }
}