class Core extends GameObject
{
    constructor(life,scene,obj3D,material)
    {
        super(0,0,0,scene,obj3D,material);
        this.life = life;
        this.tag = "Core";
        this.AddBehaviors(new SphereCollider(this));
    }

    Update()
    {
        
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
        super.Destroy();
    }

    OnCollisionEnter(collider)
    {
        if(collider.gameObject.tag === "Asteroid")
        {
            this.GetDamage(collider.gameObject);
        }
    }
}