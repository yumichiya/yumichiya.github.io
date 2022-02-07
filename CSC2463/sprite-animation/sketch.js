let img1, img2, img3, img4;
let character, character2, character3, character4;

function preload() {
    img1 = loadImage("SpelunkyGuy.png");
    img2 = loadImage("Green.png");
    img3 = loadImage("robot.png");
    img4 = loadImage("eskimo.png");
}

function setup() {
    createCanvas(1500, 1000); 
    imageMode(CENTER);
    character1 = new Character(img1, 100, 300);
    character2 = new Character(img2, 245, 687);
    character3 = new Character(img3, 400, 200);
    character4 = new Character(img4, 700, 533);
}

function keyPressed() {
    if(keyCode == RIGHT_ARROW) {
        character1.go(1);
        character2.go(1);
        character3.go(1);
        character4.go(1);
    } else if (keyCode == LEFT_ARROW) {
        character1.go(-1);
        character2.go(-1);
        character3.go(-1);
        character4.go(-1);
    }
}

function keyReleased() {
    character1.stop();
    character2.stop();
    character3.stop();
    character4.stop();
}

function draw() {
    background(255);
    character1.draw();
    character2.draw();
    character3.draw();
    character4.draw();
}

class Character {
    constructor(img, x, y) {
        this.img = img;
        this.sx = 0;
        this.x = x;
        this.y = y;
        this.move = 0;
        this.facing = 1;
    }
    
    draw() {
        push();
        translate(this.x,this.y)
        scale(this.facing,1);
        if(this.move == 1) {
            image(this.img,0,0,200,200,80*(this.sx+1),0,80,80);
        } else if (this.move == -1) {
            image(this.img,0,0,200,200,80*(this.sx+1),0,80,80);
        } else {
            image(this.img,0,0,200,200,0,0,80,80);
        }
        
        // sx += 1;
        if(frameCount % 5 == 0) {
            this.sx = (this.sx + 1) % 8;
        }
        this.x += 2 * this.move;
        pop();
    }

    go(direction) {
        this.move = direction;
        this.facing = direction;
        this.sx = 3;
    }

    stop() {
        this.move = 0;
    }
}