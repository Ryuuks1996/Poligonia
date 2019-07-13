var keys = []; // only for listener

var keyDown = [];
var keyUp = [];
var keyPressed = [];
var last = [];

var MouseX = 0.0;
var MouseY = 0.0;

document.addEventListener('keydown', function(event) 
{
	if(!keys.includes(event.keyCode))
	{
		keys.push(event.keyCode);
	}
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
	if(!keys.includes(event.button))
	{
		keys.push(event.button);
	}
	console.log("event.button");
});

document.addEventListener('onclick', function(event) 
{
	if(!keys.includes(event.button))
	{
		keys.push(event.button);
	}
	console.log("event.button");
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

document.addEventListener('mousemove',function(event)
{
	MouseX = event.x;
	MouseY = event.y;	
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
		
		//keys = [];
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
		this.buttons.push(new Input("Right", 39));
		this.buttons.push(new Input("Right", 68));
		this.buttons.push(new Input("Left", 37));
		this.buttons.push(new Input("Left", 65));
		this.buttons.push(new Input("Up", 38));
		this.buttons.push(new Input("Up", 87));
		this.buttons.push(new Input("Down", 40));
		this.buttons.push(new Input("Down", 83));
		this.buttons.push(new Input("Trigger", 32));
		this.buttons.push(new Input("Fire1", 0));
		this.buttons.push(new Input("Fire2", 2));
		this.buttons.push(new Input("Enter", 13));
		this.buttons.push(new Input("Escape", 27));
	}

	GetInput(label)
	{
		for(var i = 0 ; i < this.buttons.length; i++)
		{
			if(this.buttons[i].label == label)
			{
				if(keyPressed.includes(this.buttons[i].key))
				{
					return true;
				}
			}
		}
		return false;
	}
	
	GetInputDown(label)
	{
		for(var i = 0 ; i < this.buttons.length; i++)
		{
			if(this.buttons[i].label == label)
			{
				if(keyDown.includes(this.buttons[i].key))
				{
					return true;
				}
			}
		}
		return false;
	}
	
	GetInputUp(label)
	{
		for(var i = 0 ; i < this.buttons.length; i++)
		{
			if(this.buttons[i].label == label)
			{
				if(keyUp.includes(this.buttons[i].key))
				{
					return true;
				}
			}
		}
		return false;
	}
	
}


