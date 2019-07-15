class Player extends GameObject
{
	constructor( x, y, z, obj3D, material,minSpeed,maxSpeed,acceleration,coldDown)
	{
		super( x, y, z, obj3D, material);
		this.tag = "player";
		this.lifes = 3;

		this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;

		this.speed = minSpeed;

		this.projectile1 = Models[4].clone();
		this.projectile1.position.set(x,y,z);

		
		//stats
		this.velocity = 1;
        this.acceleration = acceleration;
		this.coldDown = coldDown;
		this.gunAmount = 1;
		
		//this.bulletPrefab = new Bullet();
		
		this.direction = this.mesh.getWorldDirection(this.direction);
		this.time = 0;
		
		this.rotation = new THREE.Vector3(0,0,0);
		this.maxXRotation = Math.PI/3;
	}
	
	Update()
	{
		var y = -((MouseX-(window.innerWidth/2))/(window.innerWidth/2)) * 0.01;
		var x = ((MouseY-(window.innerHeight/2))/(window.innerHeight/2)) * 0.01;
		this.rotation.y += y;
		this.rotation.x += x;
		if(Math.abs(this.rotation.x) > this.maxXRotation)
		{
			if(this.rotation.x > 0) {this.rotation.x = this.maxXRotation;}
			else {this.rotation.x = this.maxXRotation * -1;}
		}

		//var VecMouse = new THREE.Vector3(MouseX-(window.innerWidth/2),MouseY-(window.innerHeight/2),0);
		/*		
		this.mesh.rotateY(-((MouseX-(window.innerWidth/2))/(window.innerWidth/2)) * 0.01);		
		this.projectile1.rotateY(-((MouseX-(window.innerWidth/2))/(window.innerWidth/2)) * 0.01);
		this.mesh.rotateX(((MouseY-(window.innerHeight/2))/(window.innerHeight/2)) * 0.01);
		this.projectile1.rotateX(((MouseY-(window.innerHeight/2))/(window.innerHeight/2)) * 0.01);*/		
		this.direction = this.mesh.getWorldDirection(this.direction);
		
		//this.mesh.lookAt(new THREE.Vector3(this.direction.x,this.direction.y,this.direction.z));
		
		var dir = new THREE.Vector3(
			this.direction.x * this.speed * time.DeltaTime(),
			this.direction.y * this.speed * time.DeltaTime(),
			this.direction.z * this.speed * time.DeltaTime());				
		this.Translate(dir);
		this.mesh.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z);			
	
		if(inputManager.GetInput("Left"))
		{
			this.rotation.x += -0.01;
		}
		else if(inputManager.GetInput("Right"))
		{
			this.rotation.x += 0.01;
		}
		
		if(inputManager.GetInput("Down"))
		{
			
			this.rotation.y += -0.01;
			//this.speed = Math.max(this.minSpeed,Math.min(this.speed - this.acceleration,this.maxSpeed));
		}
		else if(inputManager.GetInput("Up"))
		{
			
			this.rotation.y += 0.01;
			//this.speed = Math.max(this.minSpeed,Math.min(this.speed + this.acceleration,this.maxSpeed));			
		}

		if(inputManager.GetInput("Trigger"))
		{
			
			//this.speed = Math.max(this.minSpeed,Math.min(this.speed + (this.acceleration*this.time.GetDelta()),this.maxSpeed));
		}

		//this.mesh.rotation.set(this.rotation.x, this.rotation.y, 0);
		var matrix = new THREE.Matrix4();
		matrix.makeRotationY(this.rotation.y);
		matrix.multiply(new THREE.Matrix4().makeRotationX(this.rotation.x));

		this.mesh.rotation.setFromRotationMatrix(matrix);
		this.projectile1.rotation.setFromRotationMatrix(matrix);
		/*this.mesh.rotation.set(0, 0, 0);
		this.mesh.rotateOnAxis(new THREE.Vector3(1,0,0),this.rotation.x);
		this.mesh.rotateOnAxis(new THREE.Vector3(0,1,0),this.rotation.y);*/
		//this.projectile1.rotation.set(0, 0, 0);
		//this.projectile1.rotateOnAxis(new THREE.Vector3(1,0,0),this.rotation.x);
		//this.projectile1.rotateOnAxis(new THREE.Vector3(0,1,0),this.rotation.y);
		//console.log(this.mesh.rotation.x + " " + this.rotation.x);
		//console.log(this.rotation.y);

		
		if(this.time >= this.coldDown && inputManager.GetInput("Fire1"))
		{
			console.log(this.rotation.y);
			this.time = 0;
			this.Shoot();
		}

		this.time += time.DeltaTime();
		
	}
	
	Shoot()
	{
		var pos = this.mesh.position.clone();
		var dir = this.direction.clone();
		dir.add(pos);
		var projectile = new Projectile(pos.x+this.direction.x,
						pos.y+this.direction.y,
						pos.z+this.direction.z,
						this.projectile1.clone(),
						GetMaterial("Material_Laser"),
						1,150,4);
		
		Instantiate(projectile);
	}
}

