

var usrColorInput = document.querySelector(".hex-color-input");

usrColorInput.addEventListener("change", function() {

document.querySelector(".color-d4").style.backgroundColor = usrColorInput.value;
    
})