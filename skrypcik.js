




var calc = document.getElementById('calcanch');
var landanch = document.getElementById('landanch');
var shipsanch = document.getElementById('shipsanch');
var rateanch = document.getElementById('rateanch');
var images = 0;


function toggleMobileMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

function removeClassImg(image, images) {
    var images = document.getElementsByClassName('images');
    for (var i = 0; i < images.length; i++){
        images[i].classList.add('inactive')
    }
    image.classList.remove('inactive');
    
}


calc.addEventListener('mouseover', function () { 
    image = document.getElementById('tipcalc');
    removeClassImg(image, images);
});

landanch.addEventListener('mouseover', function () {
    image = document.getElementById('land');
    removeClassImg(image, images);
});

shipsanch.addEventListener('mouseover', function () {
    image = document.getElementById('ships');
    removeClassImg(image, images);
});

rateanch.addEventListener('mouseover', function () {
    image = document.getElementById('rate');
    removeClassImg(image, images);
});



