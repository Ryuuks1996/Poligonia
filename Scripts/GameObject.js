class GameObject
{
	constructor( x, y, z, scene, obj3D, material )
	{
		
		//if(material === undefined){ console.log("[undefined material]"); material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );}
		//if(geometry === undefined){ console.log("[undefined Geometry]"); geometry = new THREE.BoxGeometry( 1, 1, 1 );}
		
		
		this.mesh = obj3D;
		for(var child in this.mesh.children)
		{
			this.mesh.children[child].material = material;
		}
		//this.mesh = new THREE.Mesh( geometry, material );
		
		this.mesh.position.set(x,y,z);
		
		scene.add(this.mesh);
		
		
	}
	
	
	Update()
	{
		
	}
	
	Draw( buffer )
	{
		
	}
	
	SetPosition(x,y,z)
	{
		this.mesh.position.set(x,y,z);
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

