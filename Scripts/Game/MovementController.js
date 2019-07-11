class MovementController extends Behavior
{
    constructor(gameObject, speed, acceleration, maxSpeed)
    {
        super(gameObject);
        this.speed = speed;
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
        this.direction = this.gameObject.mesh.getWorldDirection;
    }

    Update()
    {
        this.speed = this.speed + this.acceleration*TIME.getDelta();
        if(this.speed > this.maxSpeed)
        {
            this.speed = this.maxSpeed;
        }
        this.Move();
    }

    Move()
    {
        //this.gameObject.Translate(this.direction*this.speed*TIME.getDelta());
    }
}