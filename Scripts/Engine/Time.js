class Time 
{
    constructor()
    {
        this.time = new THREE.Clock(true);
        time.running = true;
        this.elapsedTime = 0;
    }

    Update()
    {
        this.time.start();
		this.actualTime = this.time.startTime;
        this.elapsedTime += this.actualTime - this.lastTime;
		this.lastTime = this.actualTime;
    }

    DeltaTime()
    {

    }

    ElpasedTime()
    {

    }
}