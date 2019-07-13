class Core extends GameObject
{
    constructor(life,obj3D,material)
    {
        super(0,0,0,obj3D,material);
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
        if(this.life <= 0)
        {
            Destroy(this)
        }
    }

    OnCollisionEnter(collider)
    {
        if(collider.gameObject.tag == "Asteroid")
        {
            this.GetDamage(collider.gameObject.size);
            console.log(this.life);
        }
    }
}