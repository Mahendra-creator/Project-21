var bullet,wall,speed,weight,thickness,damage;



function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
 speed = random(55,90);
 weight= random(400,1500);
 thickness = random(22,83);
 bullet.velocityX = speed;
 bullet.shapeColor = color(255,255,255)
}

function draw() {
  background(0);  
  
  if (wall.x-bullet.x<=wall.width/2+bullet.width/2) {
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    console.log(damage);
  }
  if (damage <=10) {
    wall.shapeColor = color(0,255,0);
  }
  if (damage>10 ) {
    wall.shapeColor = color(255,0,0);
  }
  
  drawSprites();

}