class Asteroid extends GameObject
{
    constructor(x, y, z, scene, obj3D, material, target, life, speed, acceleration, maxSpeed, size)
    {
        super(x, y, z, scene, obj3D, material);
        try
        {
            this.mesh.lookAt(target.mesh.position);
        }
        catch(e)
        {
            this.mesh.lookAt(new THREE.Vector3(0,0,0));
        }
        this.tag = "Asteroid"+size;
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
        if(this.life <= 0)
        {
            this.Destroy();
        }
    }

    Destroy()
    {
        if(size > 1)
        {
            //Instanciar 2 meteoritos de size-1;
        }
        super.Destroy();
    }

    OnCollisionEnter(collider)
    {
        if(collider.gameObject instanceof Porjectile)
        {
            this.GetDamage(collider.GameObject.damage);
        }
    }

}