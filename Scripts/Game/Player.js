class Player extends GameObject
{
	constructor( x, y, z, scene, obj3D, material,minSpeed,maxSpeed,velocity,acceleration,coldDown,gunAmount)
	{
		super( x, y, z, scene, obj3D, material);
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
		
		this.direction = this.mesh.getWorldDirection(this.direction);
		
		var dir = new THREE.Vector3(
			this.direction.x * this.speed * 10,
			this.direction.y * this.speed * 10,
			this.direction.z * this.speed * 10);
				
		this.Translate(dir);		
		
	
		if(inputManager.GetInput("Left"))
		{
			this.mesh.rotateY(0.1);
		}
		else if(inputManager.GetInput("Right"))
		{
			this.mesh.rotateY(-0.1);
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
		
		// esto debe ser cambiado cuando el sistema de tiempo este funcionado correctamente
		if(this.time >= this.coldDown && inputManager.GetInput("Trigger"))
		{
			this.time = 0;
			this.Shoot();
		}
		
		this.time++;
		
	}
	
	Shoot()
	{
		for(var i = 0 ; i < this.gunAmount; i++)
		{
			//intantiate
		}
	}
}

