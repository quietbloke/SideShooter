namespace QBGE.Helpers
{
    export class TickCounter
    {
        private frames:number;
        private currentTime:number;
        private lastUpdateTime:number;
        private elapsedTime:number;
        private fps:number;

        constructor ()
        {
            this.lastUpdateTime = (new Date).getTime();
            this.fps = 0;
        }

        public Tick()
        {
            // calculate and show the fps
            this.frames++;
            this.currentTime = (new Date).getTime();
            this.elapsedTime = this.currentTime - this.lastUpdateTime;
            if(this.elapsedTime >= 1000)
            {        
                this.fps = this.frames;
                this.lastUpdateTime = this.currentTime;
                this.frames = 0;
            }
        }
    }
}