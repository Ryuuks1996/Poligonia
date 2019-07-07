class Meteorite extends GameObject
{
    constructor(x, y, z, scene, obj3D, material, target, life, speed, acceleration, maxSpeed)
    {
        if(obj3D === undefined)
        {
            obj3D = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),
                                   new THREE.MeshBasicMaterial({color: 0x00ff00}));
            material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        }
        super(x, y, z, scene, obj3D, material);
        this.mesh.lookAt(target.position);

        this.AddBehaviors(new MovementController(this, speed, acceleration, maxSpeed));
    }

    Update()
    {
        super.Update();
    }

}