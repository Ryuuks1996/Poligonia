class Asteroid extends GameObject
{
    constructor(x, y, z, obj3D, material, target, size)
    {
        super(x, y, z, obj3D, material);
        this.mesh.lookAt(target);
        this.tag = "Asteroid";x
        this.life = size;
        this.size = size;
        this.speed = 0;//(0.0/(this.size*this.size));

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
            if(size > 1)
            {
                Instantiate(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, size-1));
            }
            Destroy(this);
        }
    }

    OnCollisionEnter(collider)
    {
        /*
        if(collider.gameObject.tag == "Core")
        {
            Destroy(this);
        }*/
    }

}