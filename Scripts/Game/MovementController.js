class MovementController extends Behavior
{
    constructor(gameObject, speed, acceleration, maxSpeed)
    {
        super(gameObject);
        this.speed = speed;
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
        this.direction = new THREE.Vector3(0,0,0);
        this.direction = this.gameObject.mesh.getWorldDirection(this.direction);
      
		
    }

    Update()
    {
        this.speed = this.speed + this.acceleration*time.DeltaTime();
        if(this.speed > this.maxSpeed)
        {
            this.speed = this.maxSpeed;
        }
        this.Move();
    }

    Move()
    {
		var dir = new THREE.Vector3(
			this.direction.x * (this.speed*time.DeltaTime()),
			this.direction.y * (this.speed*time.DeltaTime()),
			this.direction.z * (this.speed*time.DeltaTime())
            );
        this.gameObject.Translate(dir);
    }
}