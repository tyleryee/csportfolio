/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
draw = function() {
    
    background(140, 255, 207);
    
    // Changes shapes based on y position
    if(mouseY>200){
        ellipse(mouseX, mouseY,30,30);
    }
    else{
        rect(mouseX, mouseY,20,40);
    }
    
    // Changes Shape based on x position
    if(mouseX>200){
        fill(212, 147, 255);
        strokeWeight(4);
        stroke(0,0,0);
    }
    else{
        fill(247, 190, 237);
        strokeWeight(4);
        stroke(57,20,14);
    }
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
