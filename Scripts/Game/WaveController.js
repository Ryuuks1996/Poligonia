var TIME = new THREE.Clock(true);
TIME.running = true;
class WaveController
{
    constructor(target, enemieAmount, scene, multiplier, thresholds, weights, radius, period, add)
    {
        this.scene =scene;
        this.wave = 0;
        this.target = target;
        this.enemies = [];
        this.enemieAmount = enemieAmount;
        this.multiplier = multiplier;
        this.thresholds = thresholds;
        this.weights = weights;
        this.radius = radius;
        this.period = period;
        this.time = period;
		
		this.last = 0;
		console.log("ON? " + TIME.running);
		TIME.start();
		this.actualTime = TIME.startTime;
		this.lastTime = this.actualTime;
		this.counter = 0;
		
		this.add = add;
		console.log("ADD: "+this.add);
    }

    Update()
    {
        if(this.time >= this.period)
        {
            this.SpawnWave();
			//this.last = this.time;
        }
		
		TIME.start();
		this.actualTime = TIME.startTime;
        this.time += this.actualTime - this.lastTime;
		this.lastTime = this.actualTime;
		if(this.time >= this.counter*1000)
		{
			this.counter++;
		}
    }

    SpawnWave()
    {
		console.log("spawn!");
        this.wave++;
        this.time = 0;
		this.counter = 0;
        var amount = Math.ceil(this.wave*this.multiplier*this.enemieAmount);
        for(var i = 0; i < amount; i++)
        {
            //enemie type
            var r = Math.random();
            //enemie coordinates
            var x = Math.random();
            var y = Math.random();
            var z = Math.random();
            var d = x+y+z;
            x = x*this.radius/d;
            y = y*this.radius/d;
            z = z*this.radius/d;

            if(r > this.thresholds[2])
            {
                //instance mines
            }
            else if(r > this.thresholds[1])
            {
				var a = new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.1, 0, 10, 3);
                this.enemies.push(a);
				console.log("A: "+a);
				this.add.AddObject(a);
            }
            else if(r > this.thresholds[0])
            {
				var a = new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.1, 0, 10, 3);
                this.enemies.push(a);
				console.log("A: "+a);
				this.add.AddObject(a)
            }
            else
            {
				var a = new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.1, 0, 10, 3);
                this.enemies.push(a);
				console.log("A: "+a);
				this.add.AddObject(a)
            }
        }
        
        var aux = 0;
        for(var i = 0; i < this.thresholds.length; i++)
        {
            this.thresholds[i] *= this.weights[i];
            aux += this.thresholds[i];
        }
        for(var i = 0; i < this.thresholds.length; i++)
        {
            this.thresholds[i]/aux;
        }
    }
}