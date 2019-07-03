var keys = []; // only for listener

var keyDown = [];
var keyUp = [];
var press = [];
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

class Controller
{
	constructor(){}
	
	Update()
	{
		last = [];
		
		for (var i = 0; i < press.length; i++)
		{  
			var num = press[i];
			last.push(num);
		}

		press = [];
		keyDown = [];
		keyUp = [];
		
		press.length = 0;

		for (var i = 0; i < keys.length; i++)
		{  
			var num = keys[i];
			press.push(num);
		}
		
		for (var i = 0; i < press.length; i++)
		{  
			if(!last.includes(press[i]))
			{
				var num = press[i];
				keyDown.push(num);
			}
		}
		
		for (var i = 0; i < last.length; i++)
		{  
			if(!press.includes(last[i]))
			{
				var num = last[i];
				keyUp.push(num);
			}
		}

		keys.length = 0;
	}
	
	

}
