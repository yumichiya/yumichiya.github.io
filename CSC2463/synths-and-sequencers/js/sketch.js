let synth, tremolo, slider;

function preload() {
  tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();
}

function setup() {
  createCanvas(400, 400);
  synth = new Tone.Synth({
    oscillator: {type: "sine"}
  }).connect(tremolo);

  slider = createSlider(0,1,0,0.1);
}

function draw() {
  background(220);
  textAlign(CENTER);
  text("Press 1 to 6 to play", width / 2, height / 2);
  
  tremolo.depth.value = slider.value();
}

function keyPressed() {
  if(keyCode == 49) {
    synth.triggerAttackRelease("C1", 1);
  } else if (keyCode == 50) {
    synth.triggerAttackRelease("C2", 1);
  } else if(keyCode == 51) {
    synth.triggerAttackRelease("C3", 1);
  } else if(keyCode == 52) {
    synth.triggerAttackRelease("C4", 1);
  } else if(keyCode == 53) {
    synth.triggerAttackRelease("C5", 1);
  } else if(keyCode == 54) {
    synth.triggerAttackRelease("C6", 1);
  }
}