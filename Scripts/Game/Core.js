class Core extends GameObject
{
    constructor(life,obj3D,material,lifeBar)
    {
        super(0,0,0,obj3D,material);
        this.life = life;
        this.lifeBar = lifeBar;
        this.tag = "Core";
        this.AddBehaviors(new SphereCollider(this,3.5));
    }

    Update()
    {
        super.Update();
        this.lifeBar.SetValue(this.life);
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
        if(collider.gameObject.tag == "Asteroid"  && (!collider.gameObject.destroyed))
        {
            this.GetDamage(collider.gameObject.size);
            Destroy(collider.gameObject);
        }
    }
}