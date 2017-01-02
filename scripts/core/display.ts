namespace QBGE.Core
{
    export interface Display
    {
        Init(width:number, height:number);
        Clear(c:Colour);
        DrawBitmap();
        DrawPixel();
        DrawLine()
    }

    export class CanvasDisplay implements Display
    {
        private canvas:HTMLCanvasElement;
	    private context:CanvasRenderingContext2D = null;

        constructor (elementId:string)
        {
            this.canvas = <HTMLCanvasElement>document.getElementById(elementId);
            if ( this.canvas.getContext )
            {
                // for now just draw a white border round the edge of the canvas
                this.context = <CanvasRenderingContext2D> this.canvas.getContext('2d');

                this.context.fillStyle = "#f0f0f0";
                this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                this.context.fillStyle = "#000000";
                this.context.fillRect(1, 1, this.context.canvas.width-2, this.context.canvas.height-2);
            }

        }
 
        public Init(width:number, height:number)
        {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        public Clear(c:Colour)
        {
                this.context.fillStyle = "rgb(" + c.r + "," + c.g + "," + c.b + ")";
                this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        }

        public DrawBitmap()
        {

        }

        public DrawPixel()
        {

        }

        public DrawLine()
        {

        }
    }
}


