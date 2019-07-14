class MainMenu extends Scene
{
	constructor()
	{
		super();
		
		this.Background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		
		this.logo = new CanvasObject(0,200,this.sceneHUD,GetMaterial("Logo"),400,400);
		 
		this.textStart = new CanvasObject(0,-70,this.sceneHUD,GetMaterial("Material_Ship"),160,40);
		this.textOptions = new CanvasObject(0,-140,this.sceneHUD,GetMaterial("Material_Ship"),160,40);
		this.textInstructions = new CanvasObject(0,-210,this.sceneHUD,GetMaterial("Material_Ship"),160,40);
		this.textExit = new CanvasObject(0,-280,this.sceneHUD,GetMaterial("Material_Ship"),160,40);
		
		this.selector = new SelectorMenu(0,-70,this.sceneHUD,GetMaterial("Material_Ship"),240,40);
		this.selector.AddPosition(this.textStart.mesh.position);
		this.selector.AddPosition(this.textOptions.mesh.position);
		this.selector.AddPosition(this.textInstructions.mesh.position);
		this.selector.AddPosition(this.textExit.mesh.position);
		
		this.gameObjects.push(this.selector);
	}
	
	Update()
	{
		super.Update();
		//this.selector.Update();
		if(inputManager.GetInputDown("Enter") || inputManager.GetInputDown("Trigger"))
		{
			switch(this.selector.idPos)
			{
				case 0:
					SetScene(1);
					break;
				case 1:
					SetScene(2);
					break;
				case 2:
					SetScene(3);
					break;
				case 3:
					window.close();
					break;
				default:
					SetScene(1);
					break;					
			}
			
		}
		
	}
}