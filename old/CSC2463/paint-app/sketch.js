let c = 0;

function setup() {
    createCanvas(1000, 1000); 
}


function draw() {
    noStroke();
    fill('red');
    square(5, 5, 30);
    fill('orange');
    square(5, 40, 30);
    fill('yellow');
    square(5, 75, 30);
    fill(0,255,0);
    square(5, 110, 30);
    fill('cyan');
    square(5, 145, 30);
    fill('blue');
    square(5, 180, 30);
    fill('magenta');
    square(5, 215, 30);
    fill(131, 67, 51);
    square(5, 250, 30);
    fill('white');
    square(5, 285, 30);
    fill('black');
    square(5, 320, 30);
    

    if(mouseIsPressed) {
        // console.log('X: ' + mouseX + ' Y: ' + mouseY);
        if(mouseX > 5 && mouseX < 30) {
            if(mouseY > 5 && mouseY < 30) {
                c = 'red';
            }
            if(mouseY > 40 && mouseY < 70) {
                c = 'orange';
            }
            if(mouseY > 75 && mouseY < 105) {
                c = 'yellow';
            }
            if(mouseY > 110 && mouseY < 140) {
                c = [0, 255, 0];
            }
            if(mouseY > 145 && mouseY < 175) {
                c = 'cyan';
            }
            if(mouseY > 180 && mouseY < 210) {
                c = 'blue';
            }
            if(mouseY > 215 && mouseY < 245) {
                c = 'magenta';
            }
            if(mouseY > 250 && mouseY < 280) {
                c = [131, 67, 51];
            }
            if(mouseY > 285 && mouseY < 315) {
                c = 'white';
            }
            if(mouseY > 320 && mouseY < 350) {
                c = 'black';
            }

        }
    }

    if(mouseIsPressed) {
        stroke(c);
        strokeWeight(10);
        line(mouseX, mouseY, mouseX, mouseY);
        
    }
}