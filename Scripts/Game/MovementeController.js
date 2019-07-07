class MovementController extends Behaviour
{
    constructor(gameObject, speed)
    {
        super(gameObject);
        this.speed = speed;
        this.direction = new THREE.Vector3();
    }

    Update()
    {
        Move();
    }

    Move()
    {
        gameObject.transform.Translate(this.direction*this.speed*time.getDelta());
    }
}