// Attach this class to an element on the page and if supported 
// by the browser it will facilitate switching the element to 
// fullscreen.
namespace QBGE.Helpers
{
    interface BetterDocument extends Document{
        fullscreenEnabled: boolean;
        webkitFullscreenEnabled: boolean;
        mozFullScreenEnabled:boolean;
        msFullscreenEnabled:boolean;
        fullscreenElement:HTMLElement;
        webkitFullscreenElement:HTMLElement;
        mozFullScreenElement:HTMLElement;
        msFullscreenElement:HTMLElement;
        exitFullscreen;
        msExitFullscreen;
        webkitExitFullscreen;
        mozCancelFullScreen;
    }

    interface BetterHTMLElement extends HTMLElement{
        requestFullscreen;
        webkitRequestFullscreen;
        mozRequestFullScreen;
        msRequestFullscreen;
        width;
        height;
    }

    export class FullScreen
    {
        private element:BetterHTMLElement;
        private parentElement:BetterHTMLElement;
        private canSwitch:boolean = false;

        private originalparentwidth:number;
        private originalparentheight:number;

        constructor(elementId:string)
        {
            this.element = <BetterHTMLElement>document.getElementById(elementId);
            this.parentElement = <BetterHTMLElement>this.element.parentElement;

            if ( this.parentElement )
            {
                this.originalparentwidth = this.parentElement.offsetWidth;
                this.originalparentheight = this.parentElement.offsetHeight;


                document.addEventListener("fullscreenchange", this.doResize);
                document.addEventListener("fullscreenchange", this.doResize);
                document.addEventListener("webkitfullscreenchange", this.doResize);
                document.addEventListener("mozfullscreenchange", this.doResize);
                document.addEventListener("MSFullscreenChange", this.doResize);

                this.doResize();
            }
        }

        private BrowserSupportsFullscreen():boolean
        {
            var doc = <BetterDocument>document;
            if(doc.fullscreenEnabled || 
                doc.webkitFullscreenEnabled || 
                doc.mozFullScreenEnabled ||
                doc.msFullscreenEnabled) 
                return true;

            return false;
        }

        public canFullScreen():boolean
        {
            return true;
        }

        public isFullScreen():boolean
        {
            if ( !this.canFullScreen())
                return false;

            var doc = <BetterDocument>document;
            if ( doc.fullscreenElement ||
                doc.webkitFullscreenElement ||
                doc.mozFullScreenElement ||
                doc.msFullscreenElement )
                return true;

            return false;
        }

        public FullScreenToggle()
        {
            if ( !this.canFullScreen())
                return;
            if ( this.isFullScreen())
                this.Restore()
            else
                this.FullScreen();
            this.doResize();
        }

        public FullScreen()
        {
            if ( !this.canFullScreen())
                return;
            if (this.parentElement.requestFullscreen) 
            {
                this.parentElement.requestFullscreen();
            } else if (this.parentElement.webkitRequestFullscreen) {
                this.parentElement.webkitRequestFullscreen();
            } else if (this.parentElement.mozRequestFullScreen) {
                this.parentElement.mozRequestFullScreen();
            } else if (this.parentElement.msRequestFullscreen) {
                this.parentElement.requestFullscreen();
            }	
        }

        public Restore()
        {
            if ( !this.canFullScreen())
                return;
            var doc = <BetterDocument>document;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }	
        }

        private doResize = () =>
        {
            if ( this.isFullScreen())
            {
                var screenHeight:number = window.innerHeight;
                var screenWidth:number = window.innerWidth;

console.log("screen size " + screenWidth + " / " + screenHeight);

                this.parentElement.style.width = "" + screenWidth;
                this.parentElement.style.height = "" + screenHeight;

                var ratioX:number = this.element.offsetWidth / screenWidth;
                var ratioY:number = this.element.offsetHeight / screenHeight;

                var ratio = ratioX
                if ( ratioX < ratioY )
                    ratio = ratioY;
                    
                var w:number = this.element.offsetWidth / ratio;
                var h:number = this.element.offsetHeight / ratio;

                this.element.style.height = h+"px";
                this.element.style.width = w+"px";
                this.element.style.marginLeft = ""+(screenWidth-w)/2;
                this.element.style.marginTop = ""+(screenHeight-h)/2;
            }
            else
            {
                this.parentElement.style.width = "" + this.originalparentwidth;
                this.parentElement.style.height = "" + this.originalparentheight;

                var screenHeight:number = this.parentElement.offsetHeight;
                var screenWidth:number = this.parentElement.offsetWidth;

                var ratioX:number = this.element.width / screenWidth;
                var ratioY:number = this.element.height / screenHeight;

                var ratio = ratioX
                if ( ratioX < ratioY )
                    ratio = ratioY;
                    
                var w:number = this.element.width / ratio;
                var h:number = this.element.height / ratio;

                this.element.style.height = h+"px";
                this.element.style.width = w+"px";
                this.element.style.marginLeft = ""+(screenWidth-w)/2;
                this.element.style.marginTop = ""+(screenHeight-h)/2;
            }
        }
    }
}