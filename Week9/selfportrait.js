function setup()
{
    createCanvas(450, 600);
}

function draw()
{
    background(230,255,251);
    textSize(22);
    noStroke();
    fill(1);
    fill(0,85,102);
    textSize(32);
    text("~Funky Self Portrait~", 10,40);
    fill(0,128,153);
    textSize(24);
    text("by Allison", 30,75);
    text("McJannet",30, 100);
  
    // Grass
    strokeWeight(20);
    stroke(13,77,0)
    fill(51,153,0)
    rect(-100,485,800,400);

    // Head
    strokeWeight(10)
    stroke(1);
    fill(255,242,179);
    circle(250,200,125);
   
    // Eyes
    strokeWeight(10);
    stroke(1);
    fill(0);
    point(225,190);
    point(270,190);
  
    // Nose
     fill(255,230,179);
    triangle(240, 220, 235, 220, 240, 210);
   
        // x1 Number: x-coordinate of the first point.
        //y1 Number: y-coordinate of the first point.
        //x2 Number: x-coordinate of the second point.
        //y2 Number: y-coordinate of the second point.
        //x3 Number: x-coordinate of the third point.
        //y3 Number: y-coordinate of the third point.
  
    // Mouth
    fill(1);
    ellipse(245, 240, 25, 15)
    fill(1);
    rotate(25 / 1.0);
    ellipse(220, 270, 25, 15)
  
    // right arm
    rotate(0);
    strokeWeight(5);
    fill(255,242,179);
    rect(280,380,55,12);
  
    // left arm
    rotate(0);
    strokeWeight(5);
    fill(255,242,179);
    rect(115,370,55,12);
  
    // Body
    rotate(0);
    strokeWeight(10);
    stroke(204,102,255); 
    fill(230,155,179);
    triangle(310, 330, 150, 310, 210, 500);
  
     //neck

    strokeWeight(2)
    stroke(1)
    fill(255,242,179);
    rect(210, 295, 20, 20);
  
     // Hair
    strokeWeight(10)
    stroke(178, 122, 91);  
    line(130,375,170,190);
    line(300,390,280,198);
    line(150,375,170,190);
    line(275,390,285,198);
    line(110,375,170,190);
    line(250,390,275,198);
  
    // Hat
    strokeWeight(10)
    stroke(1); 
    fill(230,155,179);
    rect(150,165,150,25);
    rect(175,115,100,50);
  
    stroke(204,102,255);
    point(260,130);
    point(225,130);
    point(190,130);
  
    point(260,150);
    point(225,150);
    point(190,150);
  
    point(165,177);
    point(260,177);
    point(225,177);
    point(190,177);
    point(285,177);
    
    // left leg
    strokeWeight(5);
    rect(160,460,35,80);
  
    // left shoe
    strokeWeight(10);
    stroke(1);
    fill(204,102,255);
    strokeWeight(10);
    rect(145,530,50,30);
  
    // right leg
    stroke(204,102,255);
    strokeWeight(5);
    fill(230,155,179);
    rect(230,470,35,80);
  
    //right shoe
    strokeWeight(10);
    stroke(1);
    fill(204,102,255);
    rect(230,535,50,30);
     
}