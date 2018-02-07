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
    
document.addEventListener('DOMContentLoaded', function() {

    // Slider for mobile version of tutorial

    var controls = document.querySelectorAll('.controls');

    for(var i=0; i<controls.length; i++){
      controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slides .slide_mob');
    console.log(slides);
    var currentSlide = 0;

    function goToSlide(n){
      slides[currentSlide].className = 'slide_mob';
      currentSlide = (n+slides.length)%slides.length;
      slides[currentSlide].className = 'slide_mob showing';
    }

    function nextSlide(){
      goToSlide(currentSlide+1);
    }

    function previousSlide(){
      goToSlide(currentSlide-1);
    }

    var playing = true;

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function(){
      nextSlide();
      console.log('+1');
    };
    previous.onclick = function(){
      previousSlide();
    };


    /* Counter hat left */
    var hat = document.querySelector('#bonnet');
    var counter = document.querySelector('#counter');

    setInterval(function(){
        hat.style.transform = "translate(70px,-20px) rotate(35deg)";
        counter.style.display = 'block';
    }, 500);

    // ------- ANiMATION YARN BALL
    // only if large window
    if(window.innerWidth > 1024){
        var nextStep = false;
       
        var btnToGo = document.querySelector('.help__button');
       
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
            document.querySelector('#circle').setAttribute('cx', '0');
            document.querySelector('#circle').setAttribute('cy', '0');
            path.style.strokeDashoffset = '0';
         }, 700);
        
         setTimeout(function() {
            btnToGo.classList.add("border");
         }, 3800);

         setTimeout(function() {
            nextStep = true;
         }, 4000);

         document.addEventListener('scroll', function(event) {
            if(nextStep){
                var y = document.documentElement.scrollTop;  
                document.querySelector('#circle').style.transition = "all 1.5s ease";

                if(document.querySelector('#path2')){
                    if(y > 1300){
                        document.querySelector('#path2').style.height = "1750px";
                        document.querySelector('#circle').setAttribute('cy', "1750");
                    } else if(y > 630){
                        document.querySelector('#path2').style.height = "800px";
                        document.querySelector('#circle').setAttribute('cy', "800");
                    } else{
                        document.querySelector('#path2').style.height = "0";
                        document.querySelector('#circle').setAttribute('cy', "0");
                    }
                }else{
                    var div = document.createElement('div');
                    div.id = "path2";
                    
                    var roundPosition = getPosition(btnToGo);
                    var dist = roundPosition.x + 169;
                    div.style.left = dist + "px";

                    document.querySelector('body').appendChild(div);
                }
            }
        });
    }

    window.onresize = function(e){
        var screen_width = window.innerWidth;
        var screen_height = window.innerHeight;

        if( screen_width < 1024){
            document.querySelector('#path2').style.display = "none";
            if(document.querySelector('.help__button')){
                document.querySelector('.help__button').classList.remove('border');
            }
        }
    }

});
