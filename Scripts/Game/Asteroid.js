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
        this.speed = (0.0001/(this.size*this.size));
        console.log("Speed: "+this.speed);

        this.AddBehaviors(new MovementController(this, this.speed, 0, this.speed));
        this.AddBehaviors(new SphereCollider(this));
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
    }

    OnCollisionEnter(collider)
    {
        if(collider.gameObject.tag === "Porjectile")
        {
            this.GetDamage(collider.GameObject.damage);
        }
        else if(collider.gameObject.tag === "Core")
        {
            this.Destroy();
        }
    }

}