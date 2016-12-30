namespace QBGE.Core
{
    export class Timer
    {
        private timerId:number;

        constructor(fps:number, callFunction:Function)
        {
            this.timerId = setInterval( callFunction, Math.floor(1000/fps));
        }

        public Stop()
        {
            clearInterval(this.timerId);
        }
    }
}