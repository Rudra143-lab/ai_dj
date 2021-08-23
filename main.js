function setup(){
    canvas=createCanvas(660,490);
    canvas.center();
    canvas.position(485,250);
    video=createCapture(VIDEO);
    video.hide();
}

song="";

function preload(){
   song=loadSound('fav.mp3');
}

function play(){
    song.play();
}

function draw(){
    image(video,0,0,660,490);
}