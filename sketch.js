const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;

var rain = [];
var count = 0;
var i = 0;
var man, manS;

var lightingStrike, thunderImg1, thunderImg2, thunderImg3, thunderImg4;

function preload() {
    thunderImg1 = loadImage("lightings/1.png");
    thunderImg2 = loadImage("lightings/2.png");
    thunderImg3 = loadImage("lightings/3.png");
    thunderImg4 = loadImage("lightings/4.png");

    //manS = loadImage("manSprites/walking_1.png", "manSprites/walking_2.png", "manSprites/walking_3.png", "manSprites/walking_4.png", "manSprites/walking_5.png", "manSprites/walking_6.png", "manSprites/walking_7.png", "manSprites/walking_8.png");
}
function setup() {
    canvas = createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    man = new Umbrella();
    lightingStrike = createSprite(300, 250);
    lightingStrike.addImage(thunderImg1);
}

function draw() {
    background(0, 2, 25);
    Engine.update(engine);
    //showMouse(500, 100, "w", true);

    if (frameCount % 1 === 0 && count < 80) {
        rain.push(new Drop(random(10, 390), 0));
        rain.push(new Drop(random(10, 390), 0));
        count++;
    }
    for (let j = 0; j < rain.length; j++) {
        rain[j].display();
        if(rain[j].body.position.y > 700){
            Body.setPosition(rain[j].body, {x: random(10, 390), y: 0});
            Body.setVelocity(rain[j].body, {x:0, y: 4});
        }
    }

    // if(frameCount % 40 === 0) {
    //     var rand = Math.round(random(1,4));
    //       switch(rand) {
    //         case 1:lightingStrike.addImage(thunderImg1), lightingStrike.x = Math.round(random(100, 300));
    //                 break;
    //         case 2: lightingStrike.addImage(thunderImg2), lightingStrike.x = Math.round(random(100, 300));
    //                 break;
    //         case 3: lightingStrike.addImage(thunderImg3), lightingStrike.x = Math.round(random(100, 300));
    //                 break;
    //         case 4: lightingStrike.addImage(thunderImg4, lightingStrike.x = Math.round(random(100, 300)));
    //                 break;
    //         default: break;
    //     }
    // }

    if(frameCount % 40 === 0) {
        var rand = Math.round(random(1,4));
          switch(rand) {
            case 1:lightingStrike.addImage(thunderImg1);
                    break;
            case 2: lightingStrike.addImage(thunderImg2);
                    break;
            case 3: lightingStrike.addImage(thunderImg3);
                    break;
            case 4: lightingStrike.addImage(thunderImg4);
                    break;
            default: break;
        }
    }

    man.display();
    //man.addAnimation("W", manS);
    drawSprites();
}