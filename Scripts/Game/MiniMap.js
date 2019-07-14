class MiniMap
{
	constructor(scene,radius)
	{		
		this.scene = scene;
		this.radius = radius;
	
		this.targets = []; this.targets[0] = []; this.targets[1] = [];
		this.factorScale = 1;
		this.offsetCenter = new THREE.Vector3(-(window.innerWidth/2)+100,-(window.innerHeight/2)+100,0);
		
		this.MiniMapBackground = new CanvasObject(this.offsetCenter.x,this.offsetCenter.y,this.scene,GetMaterial("Background_MiniMap"),200,200);
	}
	
	Update()
	{		
		//remove undefined
		for(var i = 0 ; i < this.targets[0].length; i++)
		{/*
			if(this.targets[0][i] === undefined || this.targets[0][i].destroyed == true)
			{
				var a = this.targets[1][i];
				var b = this.targets[0][i];
				console.log(this.targets[0][i].destroyed + " " + this.targets[1][i]);
				this.scene.remove(a);
				this.scene.remove(b);
				this.targets[0].splice(i,1);
				this.targets[1].splice(i,1);
				//remove to targets [0] and [1]
				//destroy
			}*/
		}
		
		// Pos
		for(var i = 0 ; i < this.targets[0].length; i++)
		{	
			var pos = this.targets[0][i].mesh.position.clone();
			
			if(this.targets[0][i].mesh.position.length() <= this.radius)
			{
				this.targets[1][i].SetPosition(
					this.offsetCenter.x + (pos.x * this.factorScale),
					this.offsetCenter.y + (pos.z * this.factorScale),
					0);	
			}
			else
			{
				pos.normalize();
				this.targets[1][i].SetPosition(
					this.offsetCenter.x + (pos.x * this.radius),
					this.offsetCenter.y + (pos.z * this.radius),
					0);	
			}
		}
	}
	
	AddTarget(target,tag,size)
	{
		this.targets[0].push(target);
		var icon = new CanvasObject(0,0,this.scene,GetMaterial(tag),size,size);
		this.targets[1].push(icon);
	}

	RemoveTarget(target)
	{
		if(!this.targets[0].includes(target)) return;
		for(var i = 0 ; i < this.targets[0].length; i++)
		{
			if(this.targets[0][i] == target)
			{
				console.log(this.targets[0][i].destroyed + " " + this.targets[1][i]);
				this.scene.remove(this.targets[1][i].mesh);
				this.targets[0].splice(i,1);
				this.targets[1].splice(i,1);
			}
		}
	}
	
}