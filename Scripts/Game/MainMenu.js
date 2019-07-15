class MainMenu extends Scene
{
	constructor()
	{
		super();
		
		this.Background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		
		this.logo = new CanvasObject(400,200,this.sceneHUD,GetMaterial("Logo"),600,600);
		 
		this.textStart = new CanvasObject(-(window.innerWidth/2) + 350,0,this.sceneHUD,GetMaterial("Boton_Empezar"),256,256);
		this.textOptions = new CanvasObject(-(window.innerWidth/2) + 560,-120,this.sceneHUD,GetMaterial("Boton_Opciones"),256,256);
		this.textInstructions = new CanvasObject(-(window.innerWidth/2) + 350,-240,this.sceneHUD,GetMaterial("Boton_Instrucciones"),256,256);
		this.textExit = new CanvasObject((window.innerWidth/2) - 200 ,-300,this.sceneHUD,GetMaterial("Boton_Salir"),256,256);
		
		this.lineMenu = new CanvasObject(-(window.innerWidth/2) + 960 ,15,this.sceneHUD,GetMaterial("Lineas_Menu"),1920,1080);
		this.lineExit = new CanvasObject((window.innerWidth/2) - 135 ,-300,this.sceneHUD,GetMaterial("Lineas_Salir"),551,300);
		
		this.selector = new SelectorMenu(-(window.innerWidth/2) + 350,0,this.sceneHUD,GetMaterial("Selector"),256,256);
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