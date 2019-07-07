class PlayerMovementController extends MovementController
{
    constructor(gameObject, speed, maxSpeed, minSpeed)
    {
        super(gameObject, speed, 0, maxSpeed);
        this.minSpeed = minSpeed;
    }

    Update()
    {
        if(this.speed < this.minSpeed)
        {
            this.speed = this.minSpeed;
        }
        super.Update();
    }
}