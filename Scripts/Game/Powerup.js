class PowerUp extends GameObject
{
	constructor(x, y, z, obj3D)
	{
		this.value = Math.floor(Math.random() * 7);
		if(this.value >= 3) { this.value = 3;}
		
		var mat = GetMaterial("Material_PowerUp_"+this.value);

		super(x, y, z, obj3D, material);
		this.tag = "PowerUp";		
	}
	
	Update()
	{
		
	}
	
	OnCollisionStay(collider)
	{
		super.OnCollisionStay(collider);
		
		if(collider.tag == "player")
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
			
		}
	}
}