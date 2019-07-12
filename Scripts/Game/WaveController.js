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
		
		this.add = add;
    }

    Update()
    {
        if(this.time >= this.period)
        {
            this.SpawnWave();
        }
		
        this.time += time.DeltaTime();
    }

    SpawnWave()
    {
        console.log("Spawn");
        this.wave++;
        this.time = 0;
        var amount = Math.ceil(this.wave*this.multiplier*this.enemieAmount);
        for(var i = 0; i < amount; i++)
        {
            //enemie type
            var r = Math.random();
            //enemie coordinates
            var x = Math.random()*2 - 1;
            var y = Math.random()*2 - 1;
            var z = Math.random()*2 - 1;
            var d = Math.abs(x)+Math.abs(y)+Math.abs(z);
            x = x*this.radius/d;
            y = y*this.radius/d;
            z = z*this.radius/d;

            if(r > this.thresholds[2])
            {
                //instance mines
                console.log("mine");
            }
            else if(r > this.thresholds[1])
            {
                console.log("a");
                Instantiate(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.0001, 0, 10, 3));
            }
            else if(r > this.thresholds[0])
            {
                console.log("b");
                Instantiate(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.0001, 0, 10, 3));
            }
            else
            {
                console.log("c");
                Instantiate(new Asteroid(x, y, z, this.scene, undefined, undefined, this.target, 1, 0.0001, 0, 10, 3));
            }
        }
        /*
        var aux = 0;
        for(var i = 0; i < this.thresholds.length; i++)
        {
            this.thresholds[i] *= this.weights[i];
            aux += this.thresholds[i];
        }
        for(var i = 0; i < this.thresholds.length; i++)
        {
            this.thresholds[i]/aux;
        }*/
    }
}