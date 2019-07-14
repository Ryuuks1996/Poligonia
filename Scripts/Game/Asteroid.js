class Asteroid extends GameObject
{
    constructor(x, y, z, obj3D, material, target, size)
    {
        super(x, y, z, obj3D, material);
        this.mesh.lookAt(target);
        this.target = target;
        this.tag = "Asteroid";
        this.life = size;
        this.size = size;
        this.speed = (25/(this.size*this.size));

        this.AddBehaviors(new MovementController(this, this.speed, 0, this.speed));
        this.AddBehaviors(new SphereCollider(this,10));
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
            //var pos = this.mesh.position.clone();
            if(this.size > 1)
            {
                var pos = new THREE.Vector3(this.mesh.position.x,
                                            this.mesh.position.y,
                                            this.mesh.position.z);
                var x = ((Math.random()*2 - 1) * 15);
                var y = ((Math.random()*2 - 1) * 15);
                var z = ((Math.random()*2 - 1) * 15);
                Instantiate(new Asteroid(pos.x + x, 
                                        pos.y + y, 
                                        pos.z + z, 
                                        Models[this.size-1].clone(), undefined, 
                                        this.target, this.size-1));
                Instantiate(new Asteroid(pos.x - x, 
                                        pos.y - y, 
                                        pos.z - z, 
                                        Models[this.size-1].clone(), undefined, 
                                        this.target, this.size-1));
            }

            Destroy(this);
        }
    }

    OnCollisionEnter(collider)
    {
    }

}