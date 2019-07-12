class Projectile extends GameObject
{
	constructor(x,y,z,scene,obj3D,material)
	{
		super(x,y,z,scene,obj3D,material);
		
		this.AddBehaviors(new MovementController(this,0.1,0,10));
	}
	
	Update()
	{
		super.Update();		
	}
}