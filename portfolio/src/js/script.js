window.onscroll = function() {
    scrollToTop();  
};

var goToTop = document.getElementById("goToTop");

function scrollToTop() {
  if (document.documentElement.scrollTop > 210) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}

// show hide hourly rate input field
var radio = document.querySelectorAll(".q");
var rate  = document.getElementById("rate");
for(var i = 0 ; i < radio.length; i++){
    radio[i].addEventListener('change', function (e) {
        if(e.target.id === "hiring"){
            rate.style.display = "block";
        }else{
           rate.style.display = "none";
        }
    });
}