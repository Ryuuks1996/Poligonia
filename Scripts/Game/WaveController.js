var TIME = new THREE.Clock(true);
TIME.running = true;
class WaveController
{
    constructor(target, enemieAmount, multiplier, thresholds, radius, period)
    {
        this.wave = 0;
        this.target = target;
        this.enemies = [];
        this.enemieAmount = enemieAmount*difficulty;
        this.multiplier = multiplier;
        this.thresholds = thresholds;
        this.radius = radius;
        this.period = period - difficulty*5;
        this.time = period;

        //Instantiate(new Player(0, -10, 0, Models[0], GetMaterial("Material_Ship"),10,20,1,1,0.5,1));
        //Instantiate(new Core(100, undefined, undefined));
    }

    Update()
    {
        if(this.time >= this.period)
        {
            this.SpawnWave();
        }
        if(FindGameObject("Asteroid") === undefined && FindGameObject("Mine") === undefined)
        {
            this.SpawnWave();
        }
		
        this.time += time.DeltaTime();
    }

    SpawnWave()
    {
        this.wave++;
        this.time = 0;
        var amount = Math.ceil(this.multiplier*this.enemieAmount);
        for(var i = 0; i < amount; i++)
        {
            //enemie type
            var r = Math.random();
            //enemie coordinates
            var x = Math.random()*2 - 1;
            var y = Math.random()*2 - 1;
            var z = Math.random()*2 - 1;
            var d = Math.abs(x)+Math.abs(y)+Math.abs(z);
            x = (x*this.radius/d) + (((Math.random()*0.2) - (Math.random()*0.2))*this.radius);
            y = (y*this.radius/d) + (((Math.random()*0.2) - (Math.random()*0.2))*this.radius);
            z = (z*this.radius/d) + (((Math.random()*0.2) - (Math.random()*0.2))*this.radius);

            if(r > this.thresholds[2])
            {
                x -= ((Math.random()*0.7)*this.radius);
                y -= ((Math.random()*0.7)*this.radius);
                z -= ((Math.random()*0.7)*this.radius);
                Instantiate(new ProximityMine(x,y,z,Models[10]).clone(), GetMaterial("Material_Bomb_Off"),20,2,10);
            }
            else if(r > this.thresholds[1])
            {
                Instantiate(new Asteroid(x, y, z, Models[3].clone(), GetMaterial("Material_Asteroid_Large"), this.target, 3));
            }
            else if(r > this.thresholds[0])
            {
                Instantiate(new Asteroid(x, y, z, Models[2].clone(), GetMaterial("Material_Asteroid_Medium"), this.target, 2));
            }
            else
            {
                Instantiate(new Asteroid(x, y, z, Models[1].clone(), GetMaterial("Material_Asteroid_Small"), this.target, 1));
            }
        }
    }
}