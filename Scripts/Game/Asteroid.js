class Asteroid extends GameObject
{
    constructor(x, y, z, scene, obj3D, material, target, life, speed, acceleration, maxSpeed, size)
    {
        super(x, y, z, scene, obj3D, material);
        //this.mesh.lookAt(target.position);

        this.life = life;
        this.size = size;

        this.AddBehaviors(new MovementController(this, speed, acceleration, maxSpeed));
    }

    Update()
    {
        super.Update();
    }

    GetDamage(damage)
    {
        this.life -= damage;
    }

    Destroy()
    {
        if(size > 1)
        {
            //Instanciar 2 meteoritos de size-1;
        }
        super.Destroy();
    }

}