song1="music.mp3";
song2="music2.mp3";

function preload(){
  song=loadSound("music.mp3");
  song=loadSound("music2,mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    background("white");
    video=createCapture(VIDEO);
    video.hide();

  }
  function draw(){
    image(video,0,0,600,500);
}
