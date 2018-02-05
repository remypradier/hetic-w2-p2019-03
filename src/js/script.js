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
    
        var fil1 = document.querySelector('#fil #path1');
        var fil2 = document.querySelector('#fil #path2');
        var fil3 = document.querySelector('#fil #path3');
    
        var btnToGo = document.querySelector('.help__button');
        var btnPosition = getPosition(btnToGo);
        btnPosition.y = parseInt(btnPosition.y) - 50;

        setInterval(function(){
            
            if(btnPosition.y > yarnBallPosition.y){
                var newY2 = parseInt(fil1.getAttribute('y2')) + 10;
                yarnBallPosition.y += 10;
                yarnBall.style.top = yarnBallPosition.y + 'px';
                fil1.setAttribute('y2', newY2);
            } else{
                // yarn get to btn
                btnToGo.style.transform = "rotate(20deg)";
                var newY1 = btnPosition.y + 20;
                fil2.setAttribute('y1', newY1);
                fil2.style.display = 'block';

                var decalRight =  yarnBallPosition.x + 150;
                
                setInterval(function(){
                    
                    if(decalRight > yarnBallPosition.x){
                        yarnBallPosition.x += 10;
                        yarnBallPosition.y += 2;
                        console.log('a');
                    } else{
                        console.log('b');
                        fil3.style.display = 'block';
                        return;
                    }
                }, 30);
                return;
            }
        }, 30);
        
    }
});
