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
		
		var time = time.ElapsedTime() - this.startTime;		
		var value = THREE.Math.lerp(this.initialRadius, this.finalRadius, time/this.duration);
		this.mesh.scale.set(value,value,value);

		if(time >= this.duration)
		{
			Destroy(this);
		}
	}
}