var TIME = new THREE.Clock(true);
class WaveController
{
    constructor(target, enemieAmount, scene, multiplier, thresholds, weights, radius, period)
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
		TIME.running = true;
		console.log("ON? " + TIME.running);
    }

    Update()
    {
        if(this.time - this.last >= this.period)
        {
            this.SpawnWave();
			this.last = this.time;
        }
        this.time = TIME.elapsedTime;
		console.log("T: "+this.time+" P: "+ this.period);
    }

    SpawnWave()
    {
		console.log("spawn!");
        this.wave++;
        this.time = 0;
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
				
                this.enemies.push(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.1, 0, 10, 3));
            }
            else if(r > this.thresholds[0])
            {
                this.enemies.push(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.1, 0, 10, 2));
            }
            else
            {
                this.enemies.push(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.1, 0, 10, 1));
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