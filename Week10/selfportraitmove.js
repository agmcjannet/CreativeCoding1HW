//Skin color variable
var Skin1=255;
var Skin2=242;
var Skin3=179;

//Clothes color variable
var Clothes1=230;
var Clothes2=155;
var Clothes3=179;

var Purplestroke1=204;
var Purplestroke2=102;
var Purplestroke3=255;

//Cloud ellipse variables ellipse(x, y, w, h, [detail])
var e1x=30;
var e13y=150;
var ew=60;
var eh=30;

var e2x=50;
var e2y=130;

var e3x=80;

// Second Cloud ellipse variables
var e1x2 = 230; 
var e13y2 = 220; 
var ew2 = 60;
var eh2 = 30;

var e2x2 = 250; 
var e2y2 = 200; 

var e3x2 = 280; 

//Hat variables 
var haty1=165
var haty2=115
var pointy1=130
var pointy2=150
var pointy3=177

// Basketball variables
var ballY = 450;

// Sun variables
var sunX = 50;
var sunY = 50;
var sunDiameter = 80;



//movement variables

var movement;
var movement2;
var ymovement;
var ymovement2;
var sunmovementx;
var sunmovementy;

// Text size variables
var textsizenumber = 0;
var textsizeamount = 2;
var textsizemax= 50;
var textincreasenumber = 0;
var textdecreasenumber = 0;
var maxtextincreasenumber = 5;
var maxtextdecreasenumber = 5;



//--------------------------------------------
function setup()
{
    createCanvas(450, 600);
    movement = floor(random() * 10) + 1;
    movement2 = floor(random() * 10) + 1;
    ymovement = floor(random() * 10) + 1;
    ymovement2 = floor(random() * 10) + 1;
    sunmovementx = floor(random() * 10) + 1;
    sunmovementy = floor(random() * 10) + 1;

}



function draw()
{
    background(230,255,251);
    textSize(22);
    noStroke();
    fill(1);
    fill(0,85,102);
    textSize(32);
  
    // Text gets bigger 5 times
    if (textincreasenumber < maxtextincreasenumber) {
        textsizenumber += textsizeamount;
        if (textsizenumber >= textsizemax) {
            textsizenumber = textsizemax;
            textincreasenumber++;
        }
    }
    // Text gets smaller 5 times
    else if (textdecreasenumber < maxtextdecreasenumber) {
        textsizenumber -= textsizeamount;
        if (textsizenumber <= 0) {
            textsizenumber = 0;
            textdecreasenumber++;
        }
    }

  
    //repeat forever
    if (textincreasenumber >= maxtextincreasenumber && textdecreasenumber >= maxtextincreasenumber) {
        textincreasenumber = 0;
        textdecreasenumber = 0;
    }

    // Draw text
    textSize(32 + textsizenumber);
    text("~Funky Self Portrait~", 10, 40);
  
    
    fill(0,128,153);
    textSize(24);
    text("by Allison", 30,75);
    text("McJannet",30, 100);
  
  
  
  //Moving Clouds
            fill(500);
              ellipse(e1x,e13y,ew,eh);
              ellipse(e2x,e2y,ew,eh);
              ellipse(e3x,e13y,ew,eh);
  
             if (e1x >= 500|| e1x <= 0) {
              movement *= -1;
              }
              e1x += movement;
  
              if (e2x >= 530||e2x <= 0) {
              movement *= -1;
              }
              e2x += movement;
    
              if (e3x >= 560|| e3x <= 0) {
              movement *= -1;
              }
              e3x += movement;
  
             // Second Cloud
              ellipse(e1x2, e13y2, ew2, eh2);
              ellipse(e2x2, e2y2, ew2, eh2);
              ellipse(e3x2, e13y2, ew2, eh2);

              if (e1x2 >= 500 || e1x2 <= 0) {
                movement2 *= -1;
              }
              e1x2 += movement2;

              if (e2x2 >= 530 || e2x2 <= 0) {
                movement2 *= -1;
              }
              e2x2 += movement2;

              if (e3x2 >= 560 || e3x2 <= 0) {
                movement2 *= -1;
              }
              e3x2 += movement2;
  
    //Sun
          fill(255, 255, 0);
          noStroke();
          ellipse(sunX, sunY, sunDiameter, sunDiameter);
    
  
                if (sunX >= 500 || sunX <= 0) {
                  sunmovementx *= -1;
                }
                sunX += sunmovementx;
  
                  if (sunY >= 500 || sunY <= 0) {
                  sunmovementy *= -1;
                }
                sunY += sunmovementy;
  
  
    // Grass
    strokeWeight(20);
    stroke(13,77,0)
    fill(51,153,0)
    rect(-100,485,800,400);
  

                
                  

    // Head
    strokeWeight(10)
    stroke(1);
    fill(Skin1,Skin2,Skin3);
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
    fill(Skin1,Skin2,Skin3);
    rect(280,380,55,12);
  
    // left arm
    rotate(0);
    strokeWeight(5);
    fill(Skin1,Skin2,Skin3);
    rect(115,370,55,12);
  
    // Body
    rotate(0);
    strokeWeight(10);
    stroke(Purplestroke1, Purplestroke2, Purplestroke3); 
    fill(Clothes1, Clothes2, Clothes3);
    triangle(310, 330, 150, 310, 210, 500);
  
     //neck

    strokeWeight(2)
    stroke(1)
    fill(Skin1,Skin2,Skin3);
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
    fill(Clothes1, Clothes2, Clothes3);
    rect(150,haty1+ymovement,150,25);
    rect(175,haty2+ymovement,100,50);
  
    stroke(Purplestroke1, Purplestroke2, Purplestroke3);
    point(260,pointy1);
    point(225,pointy1);
    point(190,pointy1);
  
    point(260,pointy2);
    point(225,pointy2);
    point(190,pointy2);
  
    point(165,pointy3);
    point(260,pointy3);
    point(225,pointy3);
    point(190,pointy3);
    point(285,pointy3);

              if (haty1 >= 400 || haty1 <= 0) {
                  ymovement *= -1;
                }
                haty1 += ymovement;

                if (haty2 >= 400 || haty2 <= 0) {
                  ymovement *= -1;
                }
                haty2 += ymovement;
  
                if (pointy1 >= 400 || pointy1 <= 0) {
                  ymovement *= -1;
                }
                pointy1 += ymovement;

                if (pointy2 >= 400 || pointy2 <= 0) {
                  ymovement *= -1;
                }
                pointy2 += ymovement;
                  if (pointy3 >= 400 || pointy3 <= 0) {
                  ymovement *= -1;
                }
                pointy3 += ymovement;
  
  
    // left leg
    strokeWeight(5);
    rect(160,460,35,80);
  
    // left shoe
    strokeWeight(10);
    stroke(1);
    fill(Clothes1, Clothes2, Clothes3);
    strokeWeight(10);
    rect(145,530,50,30);
  
    // right leg
    stroke(Purplestroke1, Purplestroke2, Purplestroke3);
    strokeWeight(5);
    fill(Clothes1, Clothes2, Clothes3);
    rect(230,470,35,80);
  
    //right shoe
    strokeWeight(10);
    stroke(1);
    fill(Clothes1, Clothes2, Clothes3);
    rect(230,535,50,30);
  

      // Basketball
    fill(255, 165, 0); 
    ellipse(120, ballY, 30, 30); 
    ballY += ymovement2;

    if (ballY >= 500 || ballY <= 400) {
      ymovement2 *= -1;


                  }

    
     
}
