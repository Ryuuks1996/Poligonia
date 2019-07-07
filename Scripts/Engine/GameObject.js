class GameObject
{
	constructor( x, y, z, scene, obj3D, material)
	{
		
		//if(material === undefined){ console.log("[undefined material]"); material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );}
		//if(geometry === undefined){ console.log("[undefined Geometry]"); geometry = new THREE.BoxGeometry( 1, 1, 1 );}
		
		this.behaviors = [];

		this.tag = "gameObject";

		this.mesh = obj3D;
		for(var child in this.mesh.children)
		{
			this.mesh.children[child].material = material;
		}
		//this.mesh = new THREE.Mesh( geometry, material );
		this.mesh.position.set(x,y,z);
		this.rotation = new THREE.Vector3();
		
		scene.add(this.mesh);
	}

	AddBehaviors(behavior)
	{
		this.behaviors.push(behavior);
	}
	
	
	Update()
	{
		for(b in this.behaviors)
		{
			b.Update();
		}	
	}
	
	SetPosition(x,y,z)
	{
		this.mesh.position.set(x,y,z);
	}

	Translate(translation)
	{
		this.mesh.position.add(translation);
	}
	
	Rotate(rotation)
    {
		/*
		if(this.position.x == 0 && this.position.y == 0 && this.position.z == 0 ) {return;}
        this.position.applyEuler(rotation);
		this.position.set(this.position.x,this.position.y,this.position.z);
		*/
		this.mesh.rotation.add(rotation);
	}
	
	Destroy(scene)
	{
		
		scene.remove(this);
	}
}

