var volumen = 0;
var dificult = 1;

class OptionsScene extends Scene
{
	constructor()
	{
		super();
		
		this.Background = new CanvasObject(0,0,this.sceneHUD,GetMaterial("Background"),window.innerWidth,window.innerHeight);
		
		this.title = new CanvasObject(0,(window.innerHeight/2) - 80,this.sceneHUD,GetMaterial("Opciones"),250,75);
		
		// barra sonido
		this.titleSound = new CanvasObject(-300,100,this.sceneHUD,GetMaterial("Sonido"),250,75);
		var listMat = [];
		for(var i = 0; i < 5;i++)
		{
			listMat.push(GetMaterial("Barra_Sonido_"+i));
		}		
		this.barraSound = new Bar(-300,0,this.sceneHUD,780,100,listMat);
		this.barraSound.SetValue(volumen);
		
		// barra dificultad
		this.titledif = new CanvasObject(-300,-200,this.sceneHUD,GetMaterial("Dificultad"),250,75);
		var listMat = [];
		for(var i = 0; i < 3;i++)
		{
			listMat.push(GetMaterial("Barra_Dificultad_"+i));
		}
		this.barraDif = new Bar(-300,-300,this.sceneHUD,780,100,listMat);
		this.barraDif.SetValue(dificult);
		
		this.panelR = new CanvasObject(600,0,this.sceneHUD,GetMaterial("panel_Creditos"),500,700);
		
		this.buttonExit = new CanvasObject(0,-(window.innerHeight/2) + 70,this.sceneHUD,GetMaterial("Boton_Atras"),175,50);
		
		this.pos = 0;
	}
	
	Update()
	{
		super.Update();
		
		this.barraSound.Update();
		this.barraDif.Update();
		
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
			console.log("pos: "+this.pos);
		}
		
		if(inputManager.GetInputDown("Down") && this.pos < 3)
		{
			this.pos++;
			console.log("pos: "+this.pos);
		}
		
		switch(this.pos)
		{
			case 0:
				if(inputManager.GetInputDown("Left"))
				{
					this.barraSound.SetValue(this.barraSound.value - 1);
				}
				
				if(inputManager.GetInputDown("Right"))
				{
					this.barraSound.SetValue(this.barraSound.value + 1);
				}					
				break;

			case 1:
				if(inputManager.GetInputDown("Left"))
				{
					this.barraDif.SetValue(this.barraDif.value - 1);
				}
				
				if(inputManager.GetInputDown("Right"))
				{
					this.barraDif.SetValue(this.barraDif.value + 1);
				}					
				break;
				
			case 2:
				if(inputManager.GetInputDown("Enter") || inputManager.GetInputDown("Trigger"))
				{
					SetScene(0);
				}
				break;
		}
		
		
		
	}
}
