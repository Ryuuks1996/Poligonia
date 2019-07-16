class Explocion extends GameObject
{
	constructor(x, y, z, obj3D, material, initialRadius, finalRadius, duration)
	{
		super(x, y, z, obj3D, material);
		
		this.initialRadius = initialRadius;
		this.finalRadius = finalRadius;

		this.startTime = time.ElapsedTime();
		this.duration = duration;
	}

	Update()
	{
		super.Update();
		
		var t = time.ElapsedTime() - this.startTime;		
		var value = THREE.Math.lerp(this.initialRadius, this.finalRadius, t/this.duration);
		this.mesh.scale.set(value,value,value);

		if(t >= this.duration)
		{
			Destroy(this);
		}
	}
}