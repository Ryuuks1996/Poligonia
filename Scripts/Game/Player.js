class Player extends GameObject
{
	constructor( x, y, z, scene, obj3D, material)
	{
		super( x, y, z, scene, obj3D, material);
	
		//this.AddBehavior();
		//this.audioLisener = new THREE.AudioLisener();
		//this.add( audioLisener );
		
	}
	
	Update()
	{
		this.Translate(new THREE.Vector3(0.0,0.0,0.03));
	}
}
