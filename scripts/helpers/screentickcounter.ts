/// <reference path="tickcounter.ts" />
namespace QBGE.Helpers
{
    export class ScreenTickCounter
    {
        private tickCounter: TickCounter;
//        private frames:number;
//        private currentTime:number;
//        private lastUpdateTime:number;
//        private elapsedTime:number;
        private fps:number;
        private fpsText:string;
        private element:HTMLElement;
        private textPrefix:string;

        constructor (elementId:string,textPrefix?:string)
        {
            this.textPrefix = textPrefix;
            this.fpsText = textPrefix + "nnn";
//            this.lastUpdateTime = (new Date).getTime();
//            this.fps = 0;

            this.element = <HTMLElement> document.getElementById(elementId);
            this.tickCounter = new TickCounter();
        }

        public Tick()
        {
            this.tickCounter.Tick();
            // calculate and show the fps
//            this.frames++;
//            this.currentTime = (new Date).getTime();
//            this.elapsedTime = this.currentTime - this.lastUpdateTime;
//            if(this.elapsedTime >= 1000)
//            {        
//                this.fps = this.frames;
//                this.lastUpdateTime = this.currentTime;
 //               this.frames = 0;
  //              this.fpsText = this.textPrefix+this.fps;
 //               this.element.innerHTML = this.fpsText;
 //           }
        }
    }
}