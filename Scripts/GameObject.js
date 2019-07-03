class GameObject
{
	
	
	constructor( x, y, z, scene, geometry, material)
	{
		this.mesh = new THREE.Mesh( geometry, material );
		
		scene.add(mesh);
	}
	
	Update()
	{
		
	}
	
	Translate(x,y,z)
    {
        this.position.add(new THREE.Vector3(x,y,z));
    }

    Translate(vector3)
    {
        this.position.add(vector3);
    }
	
	Rotate(rotation)
    {
		/*
		if(this.position.x == 0 && this.position.y == 0 && this.position.z == 0 ) {return;}
        this.position.applyEuler(rotation);
		this.position.set(this.position.x,this.position.y,this.position.z);
		*/
    }
}

