var keys = []; // only for listener

var keyDown = [];
var keyUp = [];
var keyPressed = [];
var last = [];

document.addEventListener('keydown', function(event) 
{
	keys.push(event.keyCode);
});


document.addEventListener('keyup', function(event) 
{
	for(var i = 0; i < keys.length; i++)
	{
		if(event.keyCode == keys[i])
		{
			keys.splice(i,1);
			break;
		}
	}
});

document.addEventListener('onmousedown', function(event) 
{
	keys.push(event.button);
});

document.addEventListener('onmouseup', function(event) 
{
	for(var i = 0; i < keys.length; i++)
	{
		if(event.button == keys[i])
		{
			keys.splice(i,1);
			break;
		}
	}
});


class Controller
{
	constructor(){}
	
	Update()
	{
		last = [];
		
		for (var i = 0; i < keyPressed.length; i++)
		{  
			var num = keyPressed[i];
			last.push(num);
		}

		keyPressed = [];
		keyDown = [];
		keyUp = [];

		for (var i = 0; i < keys.length; i++)
		{  
			var num = keys[i];
			keyPressed.push(num);
		}
		
		for (var i = 0; i < keyPressed.length; i++)
		{  
			if(!last.includes(keyPressed[i]))
			{
				var num = keyPressed[i];
				keyDown.push(num);
			}
		}
		
		for (var i = 0; i < last.length; i++)
		{  
			if(!keyPressed.includes(last[i]))
			{
				var num = last[i];
				keyUp.push(num);
			}
		}

		//keys.length = 0;
	}
}

class Input
{
	constructor(label,key)
	{
		this.label = label;
		this.key = key;
	}
}

class InputManager
{
	constructor()
	{
		this.buttons = [];
		this.buttons.push("Right", 39);
		this.buttons.push("Right", 68);
		this.buttons.push("Left", 37);
		this.buttons.push("Left", 65);
		this.buttons.push("Up", 38);
		this.buttons.push("Up", 87);
		this.buttons.push("Down", 40);
		this.buttons.push("Down", 83);
		this.buttons.push("Trigger", 20);
		this.inputs.push("Fire1", 0);
		this.inputs.push("Fire2", 2);
	}

	GetInput(label)
	{
		for(i in inputs)
		{
			if(i.label == label)
			{
				if(keyDown.includes(i.key) || keyPressed.includes(i.key))
				{
					return true;
				}
			}
		}
		return false;
	}
}
