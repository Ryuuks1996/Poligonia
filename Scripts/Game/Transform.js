class Transform
{
    constructor(gameObject,x,y,z)
    {
        this.position = new THREE.Vector3(x,y,z); 
        this.size = new THREE.Vector3(1,1,1);
        this.rotation = new THREE.Vector3(0,0,0);
        this.gameObject = gameObject;

        this.gameObject.mesh.position = this.position;
    }

    Translate(vector3)
    {
        this.position.add(vector3);
        this.gameObject.mesh.position = this.position;
    }

    Rotate(vector3)
    {
        this.rotation.add(vector3);
    }

    Resize(vector3)
    {
        this.size.add(vector3);
    }

    SetPosition(vector3)
    {
        this.position = vector3;
        this.gameObject.mesh.position = this.position; 
    }
}