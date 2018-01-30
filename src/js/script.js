document.addEventListener('DOMContentLoaded', function() {

    /* Counter hat left */
    var hat = document.querySelector('#bonnet');
    var counter = document.querySelector('#counter');

    setInterval(function(){
        hat.style.transform = "translate(70px,-20px) rotate(35deg)";
        counter.style.display = 'block';
    }, 1000);

    
    // ------- ANiMATION YARN BALL
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

    var fil = document.querySelector('#fil');

    var btnToGo = document.querySelector('.help__button');
    var btnPosition = getPosition(btnToGo);
    btnPosition.y = btnPosition.y - 50;

    setInterval(function(){
        if(btnPosition.y > yarnBallPosition.y){
            yarnBallPosition.y += 1;
            yarnBall.style.top = yarnBallPosition.y + 'px';
            fil.style.height = yarnBallPosition.y + 'px';
        } else{
            btnToGo.style.transform = "rotate(25deg)";
            return;
        }
    }, 8);
});
