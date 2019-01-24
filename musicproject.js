var song1;
var song2;
var analyzer;
var bg;

var img1;
var img2;
var img3;
var img4;

let font,
fontsize = 20;

let counter = 0;




function preload(){
    song1 = loadSound('music/Break-thru.mp3');
    song2 = loadSound('music/ForLove.mp3');
    song3 = loadSound('music/ExFactor.mp3');
    song4 = loadSound('music/BillieJean.mp3');

    
    img1 = loadImage('images/break-thru.jpg');
    img2 = loadImage('images/forlove.jpg');
    img3 = loadImage('images/exfactor.jpg');
    img4 = loadImage('images/billiejean.jpg');
    

}

function setup() {
    createCanvas(1260, 650);
    background (51, 0, 102);
    analyzer = new p5.Amplitude();

    strokeWeight(2.5);

    
    textSize(fontsize);

    rectMode(CENTER);
    ellipseMode(CENTER);



    fill(38, 0, 77);
    stroke(51, 0, 102);
    rect(630, 580, 1260, 120);

    fill(150);
    text('Move the mouse up and down to control volume, left and right to pan the music', 450, 555);
    text('"i": grow shape     "+": longer tail    "r": reset size   "e": ellipse     "a": amplitude increases', 450, 585);
    text('"d": shrink shape   "-": shorter tail   "0": reset tail   "s": rectangle   "z"; amplitude decreases', 450, 615);

}

var theSong;

var count = 1;

function mousePressed() {

    background (51, 0, 102);

    if (count%5 == 0){

        theSong.stop();

        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(630, 580, 1260, 120);
    
        fill(150);
        text('Move the mouse up and down to control volume, left and right to pan the music', 450, 555);
        text('"i": grow shape     "+": longer tail    "r": reset size   "e": ellipse     "a": amplitude increases', 450, 585);
        text('"d": shrink shape   "-": shorter tail   "0": reset tail   "s": rectangle   "z"; amplitude decreases', 450, 615);

        count = 1;
        
    }
    
    else if (count%4 == 0){


        theSong.stop();
        theSong = song1;
        theSong.play();

        count +=1;
        
        analyzer.setInput(theSong);

        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(630, 580, 1260, 120);
    
        fill(150);
        text('Move the mouse up and down to control volume, left and right to pan the music', 450, 555);
        text('"i": grow shape     "+": longer tail    "r": reset size   "e": ellipse     "a": amplitude increases', 450, 585);
        text('"d": shrink shape   "-": shorter tail   "0": reset tail   "s": rectangle   "z"; amplitude decreases', 450, 615);   

        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(220, 580, 420, 120);
        image(img1, 20, 530, 100, 100);

        fill(150);
        text('"Break-Thru"', 130, 555);
        text('Dirty Projectors', 130, 585);
        text('Lamp Lit Prose', 130, 615);

    }   
    else if (count%3 == 0){

        theSong.stop();
        theSong = song2;
        theSong.play();

        count +=1;
        analyzer.setInput(theSong);

        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(630, 580, 1260, 120);
    
        fill(150);
        text('Move the mouse up and down to control volume, left and right to pan the music', 450, 555);
        text('"i": grow shape     "+": longer tail    "r": reset size   "e": ellipse     "a": amplitude increases', 450, 585);
        text('"d": shrink shape   "-": shorter tail   "0": reset tail   "s": rectangle   "z"; amplitude decreases', 450, 615);

        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(220, 580, 420, 120);
        image(img2, 20, 530, 100, 100);

        fill(150);
        text('"What You Wont Do For Love"', 130, 555);
        text('Bobby Caldwell', 130, 585);
        text('What You Wont Do For Love', 130, 615);

    }

    else if (count%2 == 0){

        theSong.stop();
        theSong = song3;
        theSong.play();

        count +=1;
        analyzer.setInput(theSong);
        
        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(630, 580, 1260, 120);
    
        fill(150);
        text('Move the mouse up and down to control volume, left and right to pan the music', 450, 555);
        text('"i": grow shape     "+": longer tail    "r": reset size   "e": ellipse     "a": amplitude increases', 450, 585);
        text('"d": shrink shape   "-": shorter tail   "0": reset tail   "s": rectangle   "z"; amplitude decreases', 450, 615);


        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(220, 580, 420, 120);
        image(img3, 20, 530, 100, 100);

        fill(150);
        text('"Ex-Factor"', 130, 555);
        text('Ms. Lauryn Hill', 130, 585);
        text('The Miseducation of Lauryn Hill', 130, 615);

    }  

    else if (count%1 == 0){

        theSong = song4;
        theSong.play();

        count +=1;
        
        analyzer.setInput(theSong);
        
        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(630, 580, 1260, 120);
    
        fill(150);
        text('Move the mouse up and down to control volume, left and right to pan the music', 450, 555);
        text('"i": grow shape     "+": longer tail    "r": reset size   "e": ellipse     "a": amplitude increases', 450, 585);
        text('"d": shrink shape   "-": shorter tail   "0": reset tail   "s": rectangle   "z"; amplitude decreases', 450, 615);

        fill(38, 0, 77);
        stroke(51, 0, 102);
        rect(220, 580, 420, 120);
        image(img4, 20, 530, 100, 100);

        fill(150);
        text('"Billie Jean"', 130, 555);
        text('Michael Jackson', 130, 585);
        text('Thriller', 130, 615);

    }

    
}

var volumeControl = 0;
var ampControl = 10;
let resetControl = 301;


var myShape = 'ellipse';

function keyPressed() {
    //change size of shape
    if (key == 'i'){
        if (volumeControl == 20){
            volumeControl = volumeControl;
        } else{
        volumeControl +=2;  
        }      
    }
    if (key == 'd'){
        if (volumeControl <= -3){
        volumeControl = volumeControl;
        } else{
            volumeControl -=1;  
        }       
    }

    //change the intensity that amplitude affects size
    if (key == 'a'){
        ampControl *=1.5;
    }
    if (key == 'z'){
        ampControl /=1.5;        
    }
    if (key == 'r'){
        ampControl = 1;
        volumeControl = 1;
    }
    //change the length of time before background resets (fixed)
    if (key == '-'){
        if (resetControl < 50){
            resetControl = resetControl;
        } else{
            resetControl -= 40;
        }
    }
    if (key == '='){
        if (resetControl >= 899){
            resetControl = 900;
        } else{
            resetControl += 50;
        }
    }
    if (key == '0'){
        resetControl = 301;
    }

    //change the shape with a key press
    if (key == 's'){
        myShape = 'rectangle';
    }
    if (key == 'e'){
        myShape = 'ellipse';
    }
}


function draw() {

    counter += 1;
    if (counter >= resetControl){
        background (51, 0, 102);
        counter = 0;
    }





    // Set the volume to a range between 0 and 1.0
    var volume = map(mouseY, 0, width, 0, 1);
    volume = constrain(volume, 0, 1);
    song1.amp(volume);
    song2.amp(volume);
    song3.amp(volume);
    song4.amp(volume);

  
    // Set the pan to a range between -1 (left) and 1 (right)
    var panning = map(mouseX, 0., width,-1.0, 1.0);
    song1.pan(panning);
    song2.pan(panning);
    song3.pan(panning);
    song4.pan(panning);
    
    // Get the average (root mean square) amplitude
    var rms = analyzer.getLevel();

    if (rms == 0){
        stroke(51, 0, 102);
        fill(51, 0, 102);
        rect(630, 255, 1260, 530);
    }
    
    //changing fill color if amplitude goes above 0.07
    if(rms > (.07)){
        stroke(0)
        fill(random(0,255), random(0,255), random(0,255));
    } else{
        stroke(0);
        fill(230, 230, 0);
    }

    //drawing the actual shape that changes with amplitude, volume, and pan
    if (myShape == 'rectangle'){
        rect(mouseX, height/2, Math.abs(Math.abs((mouseX-630)/7)-90) + rms*random(500,2000)+
            (mouseY*.1+10*volumeControl), (Math.abs(Math.abs((mouseX-630)/7)-90) + 
            rms*random(1500,2000))+(mouseY*.1+10*volumeControl));
    }   else{
        ellipse(mouseX, height/2, Math.abs(Math.abs((mouseX-630)/7)-90) + rms*random(500,2000)+
            (mouseY*.1+10*volumeControl), (Math.abs(Math.abs((mouseX-630)/7)-90) + 
            rms*random(1500,2000))+(mouseY*.1+10*volumeControl));
    }
    
  }



