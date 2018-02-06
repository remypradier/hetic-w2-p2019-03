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
    }, 1000);

    // ------- ANiMATION YARN BALL
    // only if large window
    if(window.innerWidth > 1024){

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
            path.style.strokeDashoffset = '0';
         }, 70);

         setTimeout(function() {
            // GO
            btnToGo.style.transform = 'rotate(20deg)';
         }, 3000);

    }
});
