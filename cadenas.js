class cadena 
{
    constructor(bodyA, bodyB){
        var atributo = 
        {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.honda = Restriccion.create(atributo);
        World.add(world, this.honda);

       // mundofisico.add(mundo, this.body);
    }
    display ()
    {
        var  pointA, pointB;
        
        pointA = this.honda.bodyA.position;
        pointB = this.honda.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}