var AudioLoader = new THREE.AudioLoader();
var playing = false;
var	audioListener = new THREE.AudioListener();

var	music = new THREE.Audio( audioListener );
var	explocion = new THREE.Audio( audioListener );
var	shoot = new THREE.Audio( audioListener );
var	powerUp = new THREE.Audio( audioListener );


function PlayAudio(ruta,loop,sound)
{
	if(!playing)
	{	
		AudioLoader.load( ruta, function( buffer ) 
		{
			sound.setBuffer( buffer );
			sound.setLoop(loop);
			sound.setVolume(volumen/6.0);
			sound.play();
		});
		playing = true;
		console.log("aaaa");
	}
}

function StopAudio()
{
	sound.stop();
	playing = false;
	
}

function SetVolumen(v)
{
	sound.setVolume(v/6.0);
}