document.addEventListener('DOMContentLoaded', function() {

    /* Counter hat left */
    var hat = document.querySelector('#bonnet');
    var counter = document.querySelector('#counter');

    setInterval(function(){
        hat.style.transform = "translate(70px,-20px) rotate(35deg)";
        counter.style.display = 'block';
    }, 1000);

    // ------- ANiMATION YARN BALL
    // only if large window
    if(window.innerWidth > 1024){
        function getPosition(element) {
            var xPosition = 0;
            var yPosition = 0;
    
            while(element) {
                xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }
    
            return { x: xPosition, y: yPosition };
        }
    

        var yarnBall = document.querySelector('#yarn');
        var yarnBallPosition = getPosition(yarnBall);
    
        var btnToGo = document.querySelector('.help__button');
        var btnPosition = getPosition(btnToGo);
        btnPosition.y = parseInt(btnPosition.y) - 50;

        var path = document.querySelector('#line1');
        var length = path.getTotalLength();
        
        // Clear any previous transition
        path.style.transition = path.style.WebkitTransition = 'none';
        // Set up the starting positions
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path.getBoundingClientRect();
        // Define our transition
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset linear 4s';
        
        setTimeout(function() { 
            // GO
            path.style.strokeDashoffset = '0';
         }, 50);
        
    
    }
});
