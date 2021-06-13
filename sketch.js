const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    Engine.update(engine);
    if (backgroundImg)
        background(backgroundImg);
        
        noStroke();
        textSize(35);
        fill("white")
        text("Time(Hours): " + hour, 580, 50)
}

async function getBackgroundImg(){
    var api = await fetch("https://worldtimeapi.org/timezone/Asia/Kolkata");
    var apiType = await api.json();
    var dt = apiType.datetime;
    var hour = dt.slice(11,13);
    console.log(hour)
    if (hour >= 04 && hour <= 06){
      bgTime = "sunrise1.png";
    }
    else if (hour >= 06 && hour <= 08){
        bgTime = "sunrise2.png";
    }
    else if (hour >= 23 && hour == 0){
        bgTime = "sunset10.png";
    }
    else if (hour == 0 && hour <= 03){
        bgTime = "sunset11.png";
    }
    else{
        bgTime = "sunset12.png";
      }
      backgroundImg = loadImage(bgTime);
    }