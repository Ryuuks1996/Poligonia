class Instructions extends Scene
{
	constructor()
	{
		super();
		this.background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		
		this.title = new CanvasObject(0,(window.innerHeight/2) - 80,this.sceneHUD,GetMaterial("Instrucciones"),250,75);
		
		this.panelL = new CanvasObject(-600,0,this.sceneHUD,GetMaterial("panel_Instrucciones_Juego"),500,700);
		this.panelC = new CanvasObject(0,0,this.sceneHUD,GetMaterial("panel_Instrucciones_Movimientos"),500,700);
		this.panelR = new CanvasObject(600,0,this.sceneHUD,GetMaterial("panel_Instrucciones_Movimientos_2"),500,700);
		
		this.textExit = new CanvasObject(0,-(window.innerHeight/2) + 70,this.sceneHUD,GetMaterial("Boton_Atras"),175,50);
		
	}
	
	Update()
	{
		super.Update();
		
		if(inputManager.GetInputDown("Enter") || inputManager.GetInputDown("Trigger"))
		{
			SetScene(0);			
		}
		
	}
}