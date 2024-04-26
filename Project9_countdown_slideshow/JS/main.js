let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {  //Next/Previous controls
    showSlides(slideIndex += n);
}

function currentSlide(n) { //The thumbnail image controls
    showSlides(slideIndex = n);
}

function showSlides(n) { //The function to show the slides
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

var countDownDate = new Date("April 26, 2024 15:30:30").getTime(); //Creating the date the countdown will count to

var x = setInterval(function() { 

    var now = new Date().getTime(); //Finding what the current date is

    var distance = countDownDate - now;//Finding what the distance between now and the count down date is


    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); //Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000* 60)) / 1000);  

//Display the results in the HTML code with the element "id="countdown"
    document.getElementById("countdown").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";


//Making it so its displays "expired" when the countdown is finished
    if (distance < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
     