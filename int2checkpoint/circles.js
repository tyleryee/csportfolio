/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 10;

draw = function() {

    // Draws Blue Circles from Upper Left to Lower Right
    strokeWeight(10);
    stroke(57,0,214);
    fill(0,210,247)
    ellipse(xPos,yPos,30,30);
    xPos = xPos + 20
    yPos = yPos + 20
    
    // Draws Blue Circles from Upper Right to Lower Left
    strokeWeight(weight);
    stroke(57,0,214);
    fill(0,210,247)
    ellipse(height - xPos,yPos,30,30);
    
    // Draws Line fron Upper Left to Lower Right
    strokeWeight(6)
    line(xPos,yPos,400,200);
    
    // Draws Lines from Upper Right to Lower left
    strokeWeight(6)
    line(height - xPos,yPos,400,200);
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
