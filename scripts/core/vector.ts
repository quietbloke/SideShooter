namespace QBGE.Core
{
    export class Vector
    {
        public x:number
        public y:number 

        constructor ( public xIn:number, public yIn:number)
        {
            this.x = xIn;
            this.y = yIn;
        }

        public Add(v1: Vector):Vector
        {
            return new Vector(this.x + v1.x,this.y + v1.y);
        }

        public Subtract(v1: Vector):Vector
        {
            return new Vector(this.x - v1.x,this.y - v1.y);
        }

        public Multiply(v1: Vector):Vector
        {
            return new Vector(this.x * v1.x,this.y * v1.y);
        }

        public Magnitude():number
        {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        public Normalise()
        {
            var mag:number = this.Magnitude();
            this.x = this.x/mag;
            this.y = this.y/mag;
        }

        public ScalarMultiply(scalar:number)
        {
            this.x *= scalar;
            this.y *= scalar;
        }

        public SetMagnitude(newMagnitude)
        {
            this.Normalise();
            this.ScalarMultiply(newMagnitude);
        }

        public DotProduct(v:Vector):number
        {
            return this.x * v.x + this.y * v.y;
        }
    }
}