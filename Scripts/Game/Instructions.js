class Instructions extends Scene
{
	constructor()
	{
		super();
		this.background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		this.textExit = new CanvasObject(0,-280,this.sceneHUD,GetMaterial("Material_Ship"),160,40);
		
		this.selector = new SelectorMenu(0,-70,this.sceneHUD,GetMaterial("Material_Ship"),240,40);
		this.selector.AddPosition(this.textExit.mesh.position);
		this.gameObjects.push(this.selector);
	}
	
	Update()
	{
		super.Update();
		
		if(inputManager.GetInputDown("Enter") || inputManager.GetInputDown("Trigger"))
		{
			switch(this.selector.idPos)
			{
				case 0:
					SetScene(1);
					break;

				default:
					SetScene(1);
					break;					
			}
			
		}
		
	}
}