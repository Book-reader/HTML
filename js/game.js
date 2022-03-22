var player, wall, sprite, group, wall2, wall3;
var i =0

function setup() {
  player = createSprite(200,200,20,20);
  wall = createSprite(400,600,800,20);
  wall2 = createSprite(400,800,800,20);
  wall3 = createSprite(400,0,800,20);
  group= new Group();
  player.debug=true;
  wall.debug=true;
  wall2.debug=true;
  wall3.debug=true;
}

function draw() {
  createCanvas(800,800);
  background(200);
  drawSprites();
  
  movement();
  i = i+0.01
  
  console.log();
  
  group.bounce(group);
  // group.collide(wall);
  group.collide(player);
  group.bounce(wall);
  wall2.bounce(group);
  wall3.bounce(group);

  wall2.velocity.y=(wall2.velocity.y-0.03);
  wall3.velocity.y=5;

  wall3.position.y=0;

  if (i > 1) {
    sprite=createSprite((Math.random())*800,20,20,20)
    sprite.debug=true;
    sprite.velocity.y=2;
    group.add(sprite); 
    sprite.lifeTime=2;
    i=0
  }
  
  if(wall.position.y>790){
    wall.position.y=789;
    wall.velocity.y=-5;
  }

  if(wall2.position.y>790){
    wall2.position.y=789;
    wall2.velocity.y=-5;
  }

  if(wall3.position.y>790){
    wall3.position.y=789;
    wall3.velocity.y=-5;
  }
  
}





function movement(){
  if(player.position.x>790){
    player.position.x=789;
  }

  if(player.position.x<10){
    player.position.x=9;
  }

  if(player.position.y<10){
    player.position.y=9;
  }

  if(player.position.y>790){
    player.position.y=789;
  }
  
  if (keyIsDown(65)||keyIsDown(37)) {
    player.position.x-=7;
  }

  if (keyIsDown(68)||keyIsDown(39)) {
    player.position.x+=7;
  }

  if (keyIsDown(87)||keyIsDown(38)) {
    player.position.y-=7;
  }

  if (keyIsDown(83)||keyIsDown(40)) {
    player.position.y+=7;
  }
}