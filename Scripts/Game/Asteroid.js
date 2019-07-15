class Asteroid extends GameObject
{
    constructor(x, y, z, obj3D, material, target, size)
    {
        super(x, y, z, obj3D, material);
        this.mesh.lookAt(target);
        this.target = target;
        this.tag = "Asteroid";
        this.life = size*size;
        this.size = size;
        this.speed = (10/(this.size));

        this.AddBehaviors(new MovementController(this, this.speed, 0, this.speed));
        this.AddBehaviors(new SphereCollider(this,2*this.size));
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
                var x = ((Math.random()*2 - 1) * 5);
                var y = ((Math.random()*2 - 1) * 5);
                var z = ((Math.random()*2 - 1) * 5);
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