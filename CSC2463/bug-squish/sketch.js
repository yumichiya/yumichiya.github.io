let w = 700;
let h = w;

let img;
let character = [];
let speed = 1;
let count = 10;

let startTime;
let gameState = 'wait';
let currScore = 0;
let score;

function preload() {
   img = loadImage("bug.png");
}

function timer() {
   return int((millis() - startTime) / 1000);
}

function mousePressed() {
   for(i = 0; i < count; i++) {
      character[i].stop();
   }
}

function setup() {
   createCanvas(w,h);
   imageMode(CENTER);
   speed = 1;
   score = 0;
   for(i = 0; i < count; i++) {
      character[i] = new Character(
         img, random(100, 600), random(100,600), 
         speed, random([-1,1]), random([0,PI/2]), 0);
   }
}

function draw() {
   background(225);
   if(gameState == 'wait') {
      textSize(30);
      textAlign(CENTER, CENTER);
      text('Press any key to start', w/2, h/2);
      if(mouseIsPressed) {
         startTime = millis();
         gameState = 'playing';
      }
   } else if (gameState == 'playing') {
      for (i = 0; i < count; i++) {
         character[i].draw();
      }
      let time = timer();
      textAlign(LEFT, TOP);
      text('Time: ' + time, 10, 10);
      text('Score: ' + currScore, 10, 50);
      if (time >= 30) {
         gameState = 'end';
      }
      if (score == count) {
         setup();
      }
   } else if (gameState == 'end') {
      textAlign(CENTER, CENTER);
      text('Game over', w/2, h/2);
      text('Press any key to restart', w/2, (h/2)+50);
      if (mouseIsPressed) {
         startTime = millis();
         gameState = 'playing';
         currScore = 0;
         setup();
      }
   }
}

class Character {
   constructor(img, x, y, speed, move, ydirection, dead) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.move = move;
      this.yfacing = -move;
      this.ydirection = ydirection;
      this.spriteFrame = 0;
      this.killed = false;
      this.dead = dead;

      if(ydirection == 0) {
         this.facing = move;
      } else if(ydirection == PI/2) {
         this.facing = move;
      } 
   }

   animate() {
      let sx, sy;
      if(this.move == 0) {
         // Animation for standing still
         sx = 0;
         sy = 1;
      } else {
         // Animation for walking
         sx = this.spriteFrame % 7;
         sy = 0;
      }

      return [sx, sy];
  }
   
   draw() {
      push();
      translate(this.x, this.y);
      scale(this.facing, this.yfacing);
      rotate(this.ydirection);

      // Draw sprite frame based on animation
      let [sx,sy] = this.animate();
      image(this.img, 0, 0, 100, 100, 100 * sx, 100 * sy, 100, 100);

      // Duration of each sprite frame
      if(frameCount % 5 == 0) {
         this.spriteFrame += 1;
      }

      // Movement
      if(this.ydirection == PI/2) {
         this.x += speed * this.move;
      }else if(this.ydirection == 0) {
         this.y += speed * this.move;
      }
      
      
      // Revert character at boundary
      if(this.x < 30) {
         this.move = 1; 
         this.facing = 1;
      } else if (this.x > width - 30) {
         this.move = -1;
         this.facing = -1;
      } 

      if(this.y < 30) {
         this.move = 1; 
         this.yfacing *= -1;
      } else if (this.y > height - 30) {
         this.move = -1;
         this.yfacing *= -1;
      }

      pop();
   }

   go(direction) {
      this.move = direction;
      this.facing = direction;
      this.sx = 3;
   }

   stop() {
      if(mouseX > this.x - 20 && mouseX < this.x + 20 &&
         mouseY > this.y - 20 && mouseY < this.y + 20) {
            this.move = 0;
            if(this.killed == false) {
               currScore++;
               score++;
               speed += 0.5;
               this.killed = true;
               this.dead = 200;
            }
      }
   }
}