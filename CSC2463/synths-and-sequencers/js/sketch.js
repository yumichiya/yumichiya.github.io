let synth, tremolo, slider;

function preload() {
  tremolo = new Tone.Tremolo(9, 0.75).toDestination().start(); // declaring effect, tremolo
}

function setup() {
  createCanvas(400, 400);
  synth = new Tone.Synth({ // declaring instrument, synth, as a sine oscillator
    oscillator: {type: "sine"}
  }).connect(tremolo); // adding instrument to the effect

  slider = createSlider(0,1,0,0.1); // create slider
}

function draw() {
  background(220);
  textAlign(CENTER);
  text("Press 1 to 6 to play", width / 2, height / 2);
  textAlign(LEFT);
  text("Tremolo", 10, 390);
  tremolo.depth.value = slider.value(); // increase or decrease the depth of the effect
}

function keyPressed() {
  if(keyCode == 49) { // key 1
    synth.triggerAttackRelease("C1", 1);
  } else if (keyCode == 50) { // key 2
    synth.triggerAttackRelease("C2", 1);
  } else if(keyCode == 51) { // key 3
    synth.triggerAttackRelease("C3", 1);
  } else if(keyCode == 52) { // key 4
    synth.triggerAttackRelease("C4", 1);
  } else if(keyCode == 53) { // key 5
    synth.triggerAttackRelease("C5", 1);
  } else if(keyCode == 54) { // key 6
    synth.triggerAttackRelease("C6", 1);
  }
}