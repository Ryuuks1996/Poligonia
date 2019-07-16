class Player extends GameObject
{
	constructor( x, y, z, obj3D, material,minSpeed,maxSpeed,acceleration,coldDown, coldDown2, nitroBar, lifeBar, powerUps)
	{
		super( x, y, z, obj3D, material);
		this.tag = "player";

		this.lifes = 3;
		this.lifeBar = lifeBar;
		this.specialAttack = 3;
		this.maxSpecial = 6;

		this.shootPowerUp = 0;
		this.nitro = 100;
		this.nitroBar = nitroBar;

		this.powerUps = powerUps;

		this.maxNitro = 100;
		this.onNitro = false;

		this.immunity = 0;

		this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;

		this.speed = minSpeed;

		this.projectiles = [];

		this.projectiles[0] = Models[5].clone();
		this.projectiles[1] = Models[6].clone();
		this.projectiles[2] = Models[7].clone();
		//this.projectile[0].position.set(x,y,z);

		
		//stats
		this.velocity = 1;
        this.acceleration = acceleration;
		this.coldDown = coldDown;
		this.coldDown2 = coldDown2;
		this.gunAmount = 1;
		
		//this.bulletPrefab = new Bullet();
		
		this.direction = this.mesh.getWorldDirection(this.direction);
		this.time = 0;
		this.time2 = 0;
		
		this.rotation = new THREE.Vector3(0,0,0);
		this.maxXRotation = Math.PI/3;

		this.AddBehaviors(new SphereCollider(this,3));
	}
	
	Update()
	{
		
		this.lifeBar.SetValue(this.lifes);
		this.powerUps.SetValue(this.specialAttack);

		//movement 
		if(Math.abs(this.rotation.x) > this.maxXRotation)
		{
			if(this.rotation.x > 0) {this.rotation.x = this.maxXRotation;}
			else {this.rotation.x = this.maxXRotation * -1;}
		}		
		this.direction = this.mesh.getWorldDirection(this.direction);
		
		if(inputManager.GetInput("Down"))
		{
			this.speed -= this.acceleration*time.DeltaTime();
			if(this.speed < this.minSpeed){this.speed = this.minSpeed}
		}
		else if(inputManager.GetInput("Up"))
		{
			this.speed += this.acceleration*time.DeltaTime();
			if(this.speed > this.maxSpeed)
			{
				if(!this.onNitro){this.speed = this.maxSpeed;}
				else{this.speed-= this.acceleration*time.DeltaTime()*3;console.log("UnNitro");}
			}			
		}
		
		var dir = new THREE.Vector3(
			this.direction.x * this.speed * time.DeltaTime(),
			this.direction.y * this.speed * time.DeltaTime(),
			this.direction.z * this.speed * time.DeltaTime());				
		this.Translate(dir);
		this.mesh.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z);	

		//rotation
		if(inputManager.GetInput("Left"))
		{
			this.rotation.x += -0.01;
		}
		else if(inputManager.GetInput("Right"))
		{
			this.rotation.x += 0.01;
		}

		var y = -((MouseX-(window.innerWidth/2))/(window.innerWidth/2)) * 0.01;
		var x = ((MouseY-(window.innerHeight/2))/(window.innerHeight/2)) * 0.01;
		this.rotation.y += y;
		this.rotation.x += x;
		var matrix = new THREE.Matrix4();
		matrix.makeRotationY(this.rotation.y);
		matrix.multiply(new THREE.Matrix4().makeRotationX(this.rotation.x));

		this.mesh.rotation.setFromRotationMatrix(matrix);
		this.projectiles[0].rotation.setFromRotationMatrix(matrix);

		//shooting
		if(this.time >= this.coldDown && inputManager.GetInput("Fire1"))
		{
			this.time = 0;
			this.Shoot();
		}

		this.time += time.DeltaTime();

		//special attack
		if(inputManager.GetInput("Fire2") && this.time2 >= this.coldDown2)
		{
			if(this.specialAttack > 0)
			{
				this.specialAttack -=1;
				this.time2 = 0;
				this.ShootSpecial();
			}
		}	

		this.time2 += time.DeltaTime();

		//nitro
		if(inputManager.GetInput("Trigger"))
		{
			if(this.nitro > 0)
			{
				if(this.speed < this.maxSpeed + 10)
				{
					this.speed += this.acceleration*3;
				}
				this.onNitro = true;
				this.nitro -= (100*time.DeltaTime()/3);
			}
		}
		else
		{
			this.onNitro = this.speed > this.maxSpeed;
		}

		if(!this.onNitro)
		{
			this.nitro += (10*time.DeltaTime());
			if(this.nitro > this.maxNitro){this.nitro = this.maxNitro }
		}

		this.nitroBar.SetValue(Math.ceil(this.nitro*0.05));

		//immunity
		if(this.immunity > 0)
		{
			this.immunity -= time.DeltaTime();
		}	
	}
	
	Shoot()
	{
		var pos = this.mesh.position.clone();
		var dir = this.direction.clone();
		dir.add(pos);
		var projectile = new Projectile(pos.x+this.direction.x,
						pos.y+this.direction.y,
						pos.z+this.direction.z,
						this.projectiles[this.shootPowerUp].clone(),
						undefined,
						1,150,4);
		Instantiate(projectile);
	}

	ShootSpecial()
	{
		Instantiate(new PlasmaBomb(
			0,0,0,
			Models[9].clone(),
			GetMaterial("Plasma"),
			5,25,3));
	}

	GetDamage(damage)
	{
		if(this.immunity <= 0)
		{
			this.lifes -= damage;
			this.lifeBar.SetValue(this.lifes);
			this.immunity = 3;
		}
	}

	AddLifes(lifes)
	{
		this.lifes += lifes;
		if(this.lifes > 3){this.lifes = 3}
	}

	AddShootPowerUp(powerUp)
	{
		this.shootPowerUp += powerUp;
		if(this.shootPowerUp > 2){this.shootPowerUp = 2}
	}

	AddNitro(nitro)
	{
		this.nitro += nitro;
		this.maxNitro += 1;
		if(this.nitro > this.maxNitro){this.nitro = this.maxNitro }
	}

	AddSpecialAttack(special)
	{
		this.specialAttack += special;
		if(this.specialAttack > this.maxSpecial){this.specialAttack = this.maxSpecial}
	}

	OnCollisionEnter(collider)
	{
		if(collider.gameObject.tag == "Asteroid")
		{
			this.GetDamage(1);
			Destroy(colldier.gameObject);
		}
		else if(collider.gameObject.tag == "PowerUp")
		{
			switch(collider.gameObject.value)
			{
				case 0:
					this.AddSpecialAttack(1);
					break;
				case 1:
					this.AddLifes(1);
					break;
				case 2:
					this.AddShootPowerUp(1);
					break;
				case 3:
					this.AddNitro(20);
					break;
			}
			Destroy(collider.gameObject);
		}
	}
}

