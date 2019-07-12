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
	for(var i = 0 ; i < Materials.length ; i++)
	{
		if(Materials[1][i] == tag)
		{
			return Materials[0][i];
		}
	}
}

//////////// MATERIAL ////////////

//Ship
CreateMaterial('Assets2D/Ship.jpg',"Material_Ship");
CreateMaterial('Assets2D/miniMap_Background.png',"Background_MiniMap");

//Enemy
CreateMaterial('Assets2D/Ship.jpg',"Material_Asteroid_Small");
CreateMaterial('Assets2D/Ship.jpg',"Material_Asteroid_Medium");
CreateMaterial('Assets2D/Ship.jpg',"Material_Asteroid_Large");

//PowerUp
CreateMaterial('Assets2D/Ship.jpg',"Material_PowerUp_Red");
CreateMaterial('Assets2D/Ship.jpg',"Material_PowerUp_Blue");
CreateMaterial('Assets2D/Ship.jpg',"Material_PowerUp_Green");
CreateMaterial('Assets2D/Ship.jpg',"Material_PowerUp_Yellow");


//////////// HUD ////////////

//Minimapa
CreateMaterial('Assets2D/Ship.jpg',"Icon_MiniMap_Player");
CreateMaterial('Assets2D/Ship.jpg',"Icon_MiniMap_Asteroid");
CreateMaterial('Assets2D/Ship.jpg',"Icon_MiniMap_Core");
CreateMaterial('Assets2D/Ship.jpg',"Icon_MiniMap_Mine");

//PowerUP
CreateMaterial('Assets2D/Ship.jpg',"Icon_PowerUp_Red");
CreateMaterial('Assets2D/Ship.jpg',"Icon_PowerUp_Blue");
CreateMaterial('Assets2D/Ship.jpg',"Icon_PowerUp_Green");
CreateMaterial('Assets2D/Ship.jpg',"Icon_PowerUp_Yellow");

//Miselaneous
CreateMaterial('Assets2D/Ship.jpg',"Icon_PlayerLife");













