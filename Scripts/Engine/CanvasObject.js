class CanvasObject
{
    constructor(x, y, scene, material, w, h)
    {
		this.texture = material.map;
		this.texture.magFilter = THREE.NearestFilter;
		this.texture.minFilter = THREE.NearestFilter;	
		this.material = new THREE.MeshBasicMaterial({map: this.texture,transparent: true});
		
		this.geometry = new THREE.PlaneGeometry(w,h);
        this.mesh = new THREE.Mesh(this.geometry,this.material);
		this.mesh.material.side = THREE.DoubleSide;
	
		this.mesh.position.set(x,y,0);
		scene.add(this.mesh);		
	}
	
	Update()
    {

    }
	
	SetPosition(x,y,z)
	{
		this.mesh.position.set(x,y,z);
	}
}