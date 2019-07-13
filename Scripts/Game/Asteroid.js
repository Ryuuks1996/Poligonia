class Asteroid extends GameObject
{
    constructor(x, y, z, scene, obj3D, material, target, size)
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
        this.tag = "Asteroid";
        this.life = size;
        this.size = size;
        this.speed = (0.1/(this.size*this.size));

        this.AddBehaviors(new MovementController(this, this.speed, 0, this.speed));
        this.AddBehaviors(new SphereCollider(this,3.5));
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
            if(size > 1)
            {
                Instantiate(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, size-1));
            }
        }
    }

    Destroy()
    {
        super.Destroy();
        delete(this);
    }

    OnCollisionEnter(collider)
    {
    }

}