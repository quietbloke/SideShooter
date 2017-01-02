namespace QBGE.Core
{
    export class Vector
    {
        public x:number
        public y:number 

        constructor ( x:number, y:number)
        {
            this.x = x;
            this.y = y;
        }

        public Add(v1: Vector):Vector
        {
            this.x += v1.x;
            this.y += v1.y;
            return this;
        }

        public Subtract(v1: Vector):Vector
        {
            this.x -= v1.x;
            this.y -= v1.y;
            return this;
        }

        public Multiply(v1: Vector):Vector
        {
            this.x *= v1.x;
            this.y *= v1.y;
            return this;
        }

        public AddNew(v1: Vector):Vector
        {
            return new Vector(this.x + v1.x,this.y + v1.y);
        }

        public SubtractNew(v1: Vector):Vector
        {
            return new Vector(this.x - v1.x,this.y - v1.y);
        }

        public MultiplyNew(v1: Vector):Vector
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