namespace QBGE.Core
{
    export interface Display
    {
         Clear(c:Colour);
         DrawBitmap();
         DrawPixel();
         DrawLine()
    }

    export class canvasDisplay implements Display
    {
        constructor (elementId:string)
        {
//            var canvas = document.getElementById(elementId);
//            if ( canvas.getContext )
//            {
//                // for now just draw a white border round the edge of the canvas
//                var ctx = canvas.getContext('2d');
//
//                ctx.fillStyle = "#f0f0f0";
//                ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
//                ctx.fillStyle = "#000000";
//                ctx.fillRect(1,1,ctx.canvas.width-2,ctx.canvas.height-2);
//            }

        }
 
         public Clear(c:Colour)
         {

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


