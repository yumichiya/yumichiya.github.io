let synth, slider, seq1, img;
let showImg = false;
let bgm = ["G5", "F5", "D5", ["A4", "G4"], "C5", "D5", "F5", "D5"];
let toneStart = 0;

function preload() {
   img = loadImage('coin.png');
}

function setup() {
  createCanvas(400, 400);
  synth = new Tone.Synth({ // declaring instrument, synth, as a sine oscillator
    oscillator: {type: "square"},
    envelope: {
         attack: 0.05,
         decay: 0.5,
         sustain: 1,
         release: 5
    }
  }).toDestination(); // adding instrument to the effect
  seq1 = new Tone.Sequence(function(time,note) {
     synth.triggerAttackRelease(note, 0.5);
  }, bgm, 0.16);
  Tone.Transport.bpm.value = 80;
  Tone.Transport.start();
  Tone.Transport.loop = true;
  Tone.Transport.loopStart = 0;
  Tone.Transport.loopEnd = '9:0:0';
  bgmStart();
}

function draw() {
  background(220);
  textAlign(CENTER);
  text("Click me to play", width / 2, height / 2);
  if(showImg) {
     image(img, 0, 0, 100, 80);
  }
 
}

function bgmStart() {
   seq1.start();
}

function mousePressed() {
  if(toneStart == 0) {
     Tone.start();
     toneStart = 1;
  }
  showImg = true;
  synth.triggerAttackRelease("C6", 0.15);
}