/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


var carX = 5;

    draw = function(){
        drawBackground()
        drawClouds()
        drawSun()
        drawCar()
        drawRoad()
    };

    drawBackground = function (){
        // Changes Background Color based on Y position of Mouse
        if(mouseY>280){
        background(66, 182, 244);
        }
        else{
        background(211, 207, 192);
        }  
    };

    noStroke();
    
    drawClouds = function (){
        // Clouds
        fill(255,255,255);
        ellipse(150,30,100,25);
        ellipse(270,50,75,20);
        ellipse(50,60,90,15);  
    };
    
    drawSun = function (){
        // Sun
        fill(252, 199, 7);
        ellipse(350,35,50,50);
    };
    
    drawCar = function (){
        // Car
        // Car Body
        fill(255,50,50);
        rect(carX,320,70,20);
        rect(carX+10,300,50,20);
        
        // Window
        fill(0, 242, 218);
        rect(carX+10,305,50,10);
        
        // Wheels
        fill(0,0,0);
        ellipse(carX+15,340,20,20);
        ellipse(carX+55,340,20,20);
        carX += .8;
    };
    
    drawRoad = function (){
        // Road
        fill(0,0,0)
        rect(0,350,400,50);
        
        // Road Dividers
        var roadDividers= 370;
        fill(255, 232, 33);
        var xC = -60;
        do {
            xC = xC + 60;
            rect(xC,roadDividers, 30, 10);
        }
        while (xC < 360); 
    };
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
