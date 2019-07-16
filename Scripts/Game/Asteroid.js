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
        this.AddBehaviors(new SphereCollider(this,this.size*this.size));
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
                var mat = GetMaterial("Material_Asteroid_Medium");
                if(this.size == 2) mat = GetMaterial("Material_Asteroid_Small");
                var pos = new THREE.Vector3(
                    this.mesh.position.x,
                    this.mesh.position.y,
                    this.mesh.position.z);
                var x = ((Math.random()*2 - 1) * 5);
                var y = ((Math.random()*2 - 1) * 5);
                var z = ((Math.random()*2 - 1) * 5);
                Instantiate(new Asteroid(
                    pos.x + x, 
                    pos.y + y, 
                    pos.z + z, 
                    Models[this.size-1].clone(), mat, 
                    this.target, this.size-1));
                Instantiate(new Asteroid(
                    pos.x - x, 
                    pos.y - y, 
                    pos.z - z, 
                    Models[this.size-1].clone(), mat, 
                    this.target, this.size-1));
                var r = Math.random();
                if(r > (0.5 + (difficulty*0.05)))
                {
                    Instantiate(new PowerUp(
                        pos.x,
                        pos.y,
                        pos.z,
                        Models[11].clone()));
                }
                Instantiate(new Explocion(
                    this.mesh.position.x,
                    this.mesh.position.y,
                    this.mesh.position.z,
                    Models[8].clone(),
                    GetMaterial("Explocion"),
                    0,this.size*3,1));
            }

            Destroy(this);
        }
    }

    OnCollisionEnter(collider)
    {
    }

}