class MiniMap
{
	constructor(scene)
	{		
		this.scene = scene;
	
		this.targets = []; this.targets[0] = []; this.targets[1] = [];
		this.factorScale = 1;
		this.offsetCenter = new THREE.Vector3(-(window.innerWidth/2)+100,-(window.innerHeight/2)+100,0);
	}
	
	Update()
	{		
		//remove undefined
		for(var i = 0 ; i < this.targets[0].length; i++)
		{
			if(this.targets[0][i] == undefined)
			{
				//remove to targets [0] and [1]
				//destroy
			}
		}
		
		// Pos
		for(var i = 0 ; i < this.targets[0].length; i++)
		{		
			this.targets[1][i].SetPosition(
				this.offsetCenter.x + (this.targets[0][i].mesh.position.x * this.factorScale),
				this.offsetCenter.y + (this.targets[0][i].mesh.position.z * this.factorScale),
				0);	
		}
	}
	
	AddTarget(target,tag,size)
	{
		this.targets[0].push(target);
		var icon = new CanvasObject(0,0,this.scene,GetMaterial(tag),size,size);
		this.targets[1].push(icon);
	}
	
}