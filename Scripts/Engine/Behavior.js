class Behavior
{
    constructor(gameObject)
    {
        this.gameObject = gameObject;
    }

    Start(){}
    Update(){}
    Destroy(){delete(this);}
}