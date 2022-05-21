let canv1 = function(c) { 
   let w = 70;
   let h = w;
   c.setup = function() {
      c.createCanvas(w, h);
   };
   c.draw = function () {
      c.background(245);
      c.translate(w/2, h/2);
      c.fill(235,150,145);
      c.noStroke();
      c.angleMode(c.DEGREES);

      c.rotate(180);
      c.ellipse(0, 15, 15, 30);

      c.rotate(72);
      c.ellipse(0, 15, 15, 30);

      c.rotate(72);
      c.ellipse(0, 15, 15, 30);
      
      c.rotate(72);
      c.ellipse(0, 15, 15, 30);

      c.rotate(72);
      c.ellipse(0, 15, 15, 30);
   };
   
}
new p5(canv1, 'c1');

let canv2 = function(c) { 
   let w = 140;
   let h = w;
   c.setup = function() {
      c.createCanvas(w, h);
   };
   c.draw = function () {
      c.background(245);
      c.translate(w/2, h/2);
      c.fill(235,150,145);
      c.noStroke();
      c.angleMode(c.DEGREES);

      c.rotate(180);
      c.ellipse(0, 30, 30, 60);

      c.rotate(72);
      c.ellipse(0, 30, 30, 60);

      c.rotate(72);
      c.ellipse(0, 30, 30, 60);
      
      c.rotate(72);
      c.ellipse(0, 30, 30, 60);

      c.rotate(72);
      c.ellipse(0, 30, 30, 60);
   };
   
}
new p5(canv2, 'c2');
