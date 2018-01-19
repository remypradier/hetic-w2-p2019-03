/* Counter hat left */

var counter = document.querySelector('#count');
setInterval(function(){
    if(counter.innerHTML > 45765){
        counter.innerHTML = counter.innerHTML - 2365;
    } else{
        return;
    }
  }, 0.001);


/* ANiMATION YARN BALL */
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

var btnToGo = document.querySelector('.btn');
var btnPosition = getPosition(btnToGo);


setInterval(function(){
    if(btnPosition.y > yarnBallPosition.y){
        yarnBallPosition.y += 10;
        yarnBall.style.top = yarnBallPosition.y + 'px';
        fil.style.height = yarnBallPosition.y + 'px';
        //yarnBall.className = "rotating";
    } else{
        btnToGo.className = "btn arrived";
        //yarnBall.className = "";
        return;
    }
}, 80);

console.log(btnPosition);




var t = 180;
var n = document.getElementById("yarn");
n.style.transform = "rotate(" + -t + "deg)";
 