class ProximityMine extends GameObject
{
	constructor(x, y, z, scene, obj3D, material, radiusFollow, radiusIgnite, radiusExplosion)
	{
		super(x, y, z, scene, obj3D, material);
		
		this.radiusFollow = radiusFollow;
		this.radiusIgnite = radiusIgnite;
		this.radiusExplosion = radiusExplosion;
		
		this.center = new Vector3(this.gameObject.x, this.gameObject.y, this.gameObject.z);
		this.followCollider = new SphereCollider(this.gameObject, this.center, this.radiusFollow);
		this.igniteCollider = new SphereCollider(this.gameObject, this.center, this.radiusIgnite);
		this.explosionCollider = new SphereCollider(this.gameObject, this.center, this.radiusExplosion);
	}
		
	Follow(sphereCollider)
	{
		var isPlayerDetected = this.followCollider.CheckCollision(sphereCollider);
		return isPlayerDetected ? true : false;
	}
	
	Explosion(sphereCollider)
	{
		var isPlayerDetected = this.explosionCollider.CheckCollision(sphereCollider);
		return isPlayerDetected ? true : false;
	}
}