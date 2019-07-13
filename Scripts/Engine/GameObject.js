class GameObject
{
	constructor( x, y, z, obj3D, material)
	{
		this.scene = scene;
		if(material === undefined)
		{ 
			material = new THREE.MeshNormalMaterial();
			material.depthWrite = false;
		}
		if(obj3D === undefined)
		{ 
			obj3D = new THREE.Mesh( new THREE.BoxGeometry( 5, 5, 5 ),material);
			obj3D.geometry.computeFaceNormals();
			obj3D.geometry.computeVertexNormals();
		}
		
		this.behaviors = [];

		this.tag = "gameObject";
		this.mesh = obj3D;
		for(var child in this.mesh.children)
		{
			this.mesh.children[child].material = material;
		}
		//this.mesh = new THREE.Mesh( geometry, material );
		//console.log(this.tag +": "+ this.mesh);
		this.mesh.position.set(x,y,z);
		this.rotation = new THREE.Vector3();
	
		this.destroyed = false;
	}

	AddBehaviors(behavior)
	{
		this.behaviors.push(behavior);
	}
	
	
	Update()
	{
		if(!this.destroyed)
		{
			for(var i = 0; i < this.behaviors.length; i++)
			{
				this.behaviors[i].Update();
			}	
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
	
	OnCollisionEnter(collider)
	{
	}

	OnCollisionStay(collider)
	{

	}

	OnCollisionExit(collider)
	{

	}
}

