class Explocion extends GameObject
{
	constructor(x, y, z, obj3D, material, initialSize, finalSize)
	{
		super(x, y, z, obj3D, material);
		
		this.initialSize = initialSize;
		this.finalSize = finalSize;

		this.time = new Time();
	}

	Update()
	{
		super.Update();

		var value = THREE.Math.lerp(this.initialSize, this.finalSize, this.time.actualTime)
		if(this.finalSize != value)
		{
			this.gameObject.mesh.scale.set(value,value,value);
		}
		else
		{
			for(var child in this.gameObject.mesh.children)
			{
				this.gameObject.mesh.children[child].material.transparent = true;
			}
			this.gameObject.destroyed = true;
		}
	}
}