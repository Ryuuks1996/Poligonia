class LoadingScene extends Scene
{
	constructor(max)
	{
		super();
		this.time = 0;
		this.max = max;
	}
	
	Update()
	{
		if(this.time > this.max)
		{
			SetScene(0);
		}
		this.time += time.DeltaTime();
	}
}