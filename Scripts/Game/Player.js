class Player extends GameObject
{
	constructor( x, y, z, obj3D, material,minSpeed,maxSpeed,velocity,acceleration,coldDown,gunAmount)
	{
		super( x, y, z, obj3D, material);
		this.tag = "player";

		this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;

		this.speed = minSpeed;
		
		//stats
		this.velocity = velocity;
        this.acceleration = acceleration;
		this.coldDown = coldDown;
		this.gunAmount = gunAmount;
		
		//this.bulletPrefab = new Bullet();
		
		this.direction = this.mesh.getWorldDirection(this.direction);
		this.time = 0;
		
	}
	
	Update()
	{
		//var VecMouse = new THREE.Vector3(MouseX-(window.innerWidth/2),MouseY-(window.innerHeight/2),0);		
		this.mesh.rotateY(-((MouseX-(window.innerWidth/2))/(window.innerWidth/2)) * 0.01);
		this.mesh.rotateX(((MouseY-(window.innerHeight/2))/(window.innerHeight/2)) * 0.001);
		
		this.direction = this.mesh.getWorldDirection(this.direction);
		
		//this.mesh.lookAt(new THREE.Vector3(this.direction.x,this.direction.y,this.direction.z));
		
		var dir = new THREE.Vector3(
			this.direction.x * this.speed * time.DeltaTime(),
			this.direction.y * this.speed * time.DeltaTime(),
			this.direction.z * this.speed * time.DeltaTime());				
		this.Translate(dir);		
		
	
		if(inputManager.GetInput("Left"))
		{
			this.mesh.rotateY(0.01);
		}
		else if(inputManager.GetInput("Right"))
		{
			this.mesh.rotateY(-0.01);
		}
		
		if(inputManager.GetInput("Down"))
		{
			this.speed = Math.max(this.minSpeed,Math.min(this.speed - this.acceleration,this.maxSpeed));
		}
		else if(inputManager.GetInput("Up"))
		{
			this.speed = Math.max(this.minSpeed,Math.min(this.speed + this.acceleration,this.maxSpeed));			
		}
		else
		{
			this.speed = Math.max(this.minSpeed,Math.min(this.speed - (this.acceleration/5),this.maxSpeed));
		}
		
		if(this.time >= this.coldDown && inputManager.GetInput("Trigger"))
		{
			this.time = 0;
			this.Shoot();
		}
		
		this.time += time.DeltaTime();
		
	}
	
	Shoot()
	{
		for(var i = 0 ; i < this.gunAmount; i++)
		{
			var pos = this.mesh.position.clone();
			var projectile = new Projectile(pos.x,pos.y,pos.z,Models[0].clone(),GetMaterial("Material_Ship"));
			var dir = new THREE.Vector3(
				this.direction.x + projectile.mesh.position.x,
				this.direction.y + projectile.mesh.position.y,
				this.direction.z + projectile.mesh.position.z,
				);
			projectile.mesh.lookAt(dir);
			Instantiate(projectile);
		}
		
	}
}

