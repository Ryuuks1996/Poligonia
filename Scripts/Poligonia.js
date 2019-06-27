var scene, controls;

init();

var init = function()
{
}

var update = function()
{
	requestAnimationFrame(update);
}

var animate = function() 
{
	renderer.render( scene, camera );
	controls.update();
}