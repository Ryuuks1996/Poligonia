var TextureLoader = new THREE.TextureLoader();

var Materials = []; Materials[0] = []; Materials[1] = [];

function CreateMaterial(path,tag)
{
	var texture = TextureLoader.load(path);
	var material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true})
	// material.side = THREE.DoubleSide;
	material.depthWrite = false;
	Materials[0].push(material);
	
	Materials[1].push(tag); 
}

function GetMaterial(tag)
{
	for(var i = 0 ; i < Materials[0].length ; i++)
	{
		if(Materials[1][i] == tag)
		{
			return Materials[0][i];
		}
	}
}

//////////// MENU ////////////

//Background
CreateMaterial('Assets2D/Hud/Fondo.png',"Background");
CreateMaterial('Assets2D/Hud/Fondo menu.png',"Background_MainMenu");

//Ship
CreateMaterial('Assets2D/Ship.jpg',"Material_Ship");
CreateMaterial('Assets2D/miniMap_Background.png',"Background_MiniMap");
CreateMaterial('Assets2D/Textures/laser.jpg',"Material_Laser");

//Enemy
CreateMaterial('Assets2D/Ship.jpg',"Material_Asteroid_Small");
CreateMaterial('Assets2D/Ship.jpg',"Material_Asteroid_Medium");
CreateMaterial('Assets2D/Ship.jpg',"Material_Asteroid_Large");
CreateMaterial('Assets2D/Textures/Bomb_Off.jpg',"Material_Bomb_Off");
CreateMaterial('Assets2D/Textures/Bomb_On.jpg',"Material_Bomb_On");

//PowerUp
CreateMaterial('Assets2D/Textures/PowerUp_Red.jpg',"Material_PowerUp_Red");
CreateMaterial('Assets2D/Textures/PowerUp_Blue.jpg',"Material_PowerUp_Blue");
CreateMaterial('Assets2D/Textures/PowerUp_Green.jpg',"Material_PowerUp_Green");
CreateMaterial('Assets2D/Textures/PowerUp_Yellow.jpg',"Material_PowerUp_Yellow");
CreateMaterial('Assets2D/Textures/PowerUp_Orange.jpg',"Material_PowerUp_Orange");
CreateMaterial('Assets2D/Textures/PowerUp_Purple.jpg',"Material_PowerUp_Purple");

//////////// HUD ////////////

//Titulos
CreateMaterial('Assets2D/Hud/Logo.png',"Logo");
CreateMaterial('Assets2D/Hud/Titulo Instrucciones.png',"Instrucciones");
CreateMaterial('Assets2D/Hud/Titulo Opciones.png',"Opciones");

//Barra sonido
for(var i = 0; i < 5; i++)
{
	CreateMaterial('Assets2D/Hud/Sonido '+(i+1)+'.png',"Barra_Sonido_"+i);
}

//Barra dificultad
for(var i = 0; i < 3; i++)
{
	CreateMaterial('Assets2D/Hud/Dificultad '+(i+1)+'.png',"Barra_Dificultad_"+i);
}

//Botones
CreateMaterial('Assets2D/Hud/Empezar.png',"Boton_Empezar");
CreateMaterial('Assets2D/Hud/Opciones.png',"Boton_Opciones");
CreateMaterial('Assets2D/Hud/Instrucciones.png',"Boton_Instrucciones");
CreateMaterial('Assets2D/Hud/Salir.png',"Boton_Salir");
CreateMaterial('Assets2D/Hud/Atras.png',"Boton_Atras");
CreateMaterial('Assets2D/Hud/Selector.png',"Selector");
CreateMaterial('Assets2D/Hud/Flecha 1.png',"Derecha");
CreateMaterial('Assets2D/Hud/Flecha 2.png',"Izquierda");
CreateMaterial('Assets2D/Hud/Flecha 1.png',"Derecha_Selector");
CreateMaterial('Assets2D/Hud/Flecha 2.png',"Izquierda_Selector");

//Menu
CreateMaterial('Assets2D/Hud/Lineas menu.png',"Lineas_Menu");
CreateMaterial('Assets2D/Hud/Lineas salida.png',"Lineas_Salir");

//Minimapa
CreateMaterial('Assets2D/Hud/player.png',"Icon_MiniMap_Player");
CreateMaterial('Assets2D/Hud/asteroid.png',"Icon_MiniMap_Asteroid");
CreateMaterial('Assets2D/Hud/core.png',"Icon_MiniMap_Core");
CreateMaterial('Assets2D/Hud/bomba.png',"Icon_MiniMap_Mine");

//Paneles
CreateMaterial('Assets2D/Hud/Creditos.png',"panel_Creditos");
CreateMaterial('Assets2D/Hud/Instrucciones Juego.png',"panel_Instrucciones_Juego");
CreateMaterial('Assets2D/Hud/Instrucciones movimientos.png',"panel_Instrucciones_Movimientos");
CreateMaterial('Assets2D/Hud/Instrucciones movimientos 2.png',"panel_Instrucciones_Movimientos_2");

//Miselaneous
CreateMaterial('Assets2D/Hud/Vida.png',"Icon_PlayerLife");












