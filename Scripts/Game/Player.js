class Player extends GameObject
{
	constructor( x, y, z, scene, obj3D, material)
	{
		super( x, y, z, scene, obj3D, material);
	
		this.behaviors.AddBehavior();
		//this.audioLisener = new THREE.AudioLisener();
		//this.add( audioLisener );
		
	}
	
	Update()
	{
		
	}
}

