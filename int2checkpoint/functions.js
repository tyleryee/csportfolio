/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(81, 247, 189);


    
drawFace = function(x,y){
    fill(random(255),random(255), random(255));
    ellipse(x,y,100,100);
    ellipse(x - 20, y - 20, 20, 20);
    ellipse(x + 20, y - 20, 20, 20);
    line(x - 30, y + 20, x + 30, y + 20);
}
mouseClicked = function(){
    drawFace(mouseX,mouseY);
}

    
    
    
draw = function(){
    
};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
