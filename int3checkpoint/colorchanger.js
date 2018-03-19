// Creates Variables and saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/* EventListener for Button.
    Sets the body's background color to the user provided value */
colorChangeButton.addEventListener("click", 
function ColorPicker(){
    var red = Math.floor(Math.random() * 256); // range is 0-255
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";
    var randColor = rgb;
    Colour = randColor;
    document.body.style.backgroundColor = newBGColor.value;
})

