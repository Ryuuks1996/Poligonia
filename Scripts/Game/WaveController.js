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
    }

    Update()
    {
        if(this.time === this.period)
        {
            this.SpawnWave();
        }
        time += TIME.getDelta();
    }

    SpawnWave()
    {
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
            x = x*radius/d;
            y = y*radius/d;
            z = z*radius/d;

            if(r > this.thresholds[2])
            {
                //instance mines
            }
            else if(r > this.thresholds[1])
            {
                this.enemies.push(new Meteorite(x, y, z, scene, obj3D, material, target, life, speed, acceleration, maxSpeed, 3));
            }
            else if(r > this.thresholds[0])
            {
                this.enemies.push(new Meteorite(x, y, z, scene, obj3D, material, target, life, speed, acceleration, maxSpeed, 2));
            }
            else
            {
                this.enemies.push(new Meteorite(x, y, z, scene, obj3D, material, target, life, speed, acceleration, maxSpeed, 1));
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