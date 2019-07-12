class MovementController extends Behavior
{
    constructor(gameObject, speed, acceleration, maxSpeed)
    {
        super(gameObject);
        this.speed = speed;
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
        this.direction = new THREE.Vector3();
        this.gameObject.mesh.getWorldDirection(this.direction);
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
        this.gameObject.Translate(this.direction*this.speed*time.DeltaTime());
    }
}