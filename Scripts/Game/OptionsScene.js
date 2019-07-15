var volumen = 0;
var dificult = 1;

class OptionsScene extends Scene
{
	constructor()
	{
		super();
		
		this.Background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		
		this.title = new CanvasObject(0,(window.innerHeight/2) - 80,this.sceneHUD,GetMaterial("Instrucciones"),250,75);
		
		// barra sonido
		this.titleSound = new CanvasObject(0,(window.innerHeight/2) - 80,this.sceneHUD,GetMaterial("Instrucciones"),250,75);
		var listMat = [];
		for(var i = 0; i < 5;i++)
		{
			listMat.push(GetMaterial("Barra_Sonido_"+i));
		}		
		this.barraSound = new Bar(-300,0,this.sceneHUD,780,100,listMat);
		
		// barra dificultad
		this.titledif = new CanvasObject(0,(window.innerHeight/2) - 80,this.sceneHUD,GetMaterial("Instrucciones"),250,75);
		var listMat = [];
		for(var i = 0; i < 3;i++)
		{
			listMat.push(GetMaterial("Barra_Dificultad_"+i));
		}
		this.barraDif = new Bar(-300,-300,this.sceneHUD,780,100,listMat);
		
		this.panelR = new CanvasObject(600,0,this.sceneHUD,GetMaterial("panel_Instrucciones_Movimientos_2"),500,700);
		
		this.buttonExit = new CanvasObject(0,-(window.innerHeight/2) + 70,this.sceneHUD,GetMaterial("Boton_Atras"),175,50);
		
		this.pos = 0;
	}
	
	Update()
	{
		super.Update();
		this.barraSound.active = false;
		this.barraDif.active = false;
		//this.buttonExit.active = false;
		switch(this.pos)
			{
				case 0:
					this.barraSound.Active = true;
					break;
				case 1:
					this.barraDif.Active = true;
					break;
				case 2:
					//this.buttonExit.Active = true;
					break;
			}
		
		if(inputManager.GetInputDown("Up") && this.pos > 0)
		{
			this.pos--;
		}
		
		if(inputManager.GetInputDown("Down") && this.pos < 3)
		{
			this.pos++;
		}
		
		if(inputManager.GetInputDown("Enter") || inputManager.GetInputDown("Trigger"))
		{
			switch(this.pos)
			{
				case 0:
					break;
				case 1:
					break;
				case 2:
					break;
			}
		}
	}
}
