const sounds = new Tone.Players({
   coins: "coins_win.mp3",
   magic: "magical_ping.mp3",
   bubble: "bubble.mp3",
   kitten: "kitten.mp3"
})

// sounds.toDestination();

let button1, button2, button3, button4, slider1;

var gain = new Tone.Gain().toDestination();

sounds.connect(gain);

function setup() {
  createCanvas(400, 400);

  button1 = createButton("Coins");
  button1.position(50,50);
  button1.mousePressed(() => buttonSound('coins'));

  button2 = createButton("Magic");
  button2.position(50,100);
  button2.mousePressed(() => buttonSound('magic'));

  button3 = createButton("Bubble");
  button3.position(50,150);
  button3.mousePressed(() => buttonSound('bubble'));

  button4 = createButton("Kitten");
  button4.position(50,200);
  button4.mousePressed(() => buttonSound('kitten'));

  slider1 = createSlider(0,1,0,0.1);

}

function draw() {
  background(220);

  gain.gain.value = slider1.value();

  text("Gain", 10, 390);
}

function buttonSound(sound) {
   sounds.player(sound).start();
 }