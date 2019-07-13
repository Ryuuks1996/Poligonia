class Core extends GameObject
{
    constructor(life,scene,obj3D,material)
    {
        super(0,0,0,scene,obj3D,material);
        this.life = life;
        this.tag = "Core";
        this.AddBehaviors(new SphereCollider(this,3.5));
    }

    Update()
    {
        super.Update();
    }

    GetDamage(damage)
    {
        this.life -= damage;
        console.log(this.life);
        if(this.life <= 0)
        {
            this.Destroy();
        }
    }

    Destroy()
    {
        super.Destroy();
    }

    OnCollisionEnter(collider)
    {
        console.log(collider.gameObject.tag);
        if(collider.gameObject.tag == "Asteroid")
        {
            this.GetDamage(collider.gameObject.size);
            collider.gameObject.Destroy();
        }
    }
}