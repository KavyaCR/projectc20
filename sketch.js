

var car,wall;

var carImg1, carImg2, carImg3;


var speed, weight; 

function preload() {
	carImg1 = loadImage("car3.png");
	carImg2 = loadImage("car2.png");
	carImg3 = loadImage("carss.png");
	
}

function setup() {
  createCanvas(1000, 400);


	speed=Math.round(random(55,90));
	weight=random(400,1500);


	car=createSprite(1, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1000,200, 60, height/2);
  	wall.shapeColor=color('green');
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation= Math.round (0.5 * weight * speed* speed/22500);
	if(deformation>180)
	{
		//car.shapeColor=color(255,0,0);
		car.addImage(carImg1);
		car.scale = 0.7;
		stroke('cyan');
		strokeWeight(4);
		text("deformation = " + deformation, 400,200);
		stroke("White");
		text("Speed = " + speed, 100,100);
	}

	if(deformation<180 && deformation>100)
	{
		//car.shapeColor=color(230,230,0);
		car.addImage(carImg2);
		car.scale = 0.5;
		stroke("Yellow");
		strokeWeight(4);
		text("deformation = " + deformation, 400,200);
		stroke("White");
		text("Speed = " + speed, 100,100);
	}

	if(deformation<100)
	{
		//car.shapeColor=color(0,255,0);
		car.addImage(carImg3);
		car.scale = 0.5;
		stroke('pink');
		strokeWeight(4);
		text("deformation = " + deformation, 400,200);
		stroke("White");
		text("Speed = " + speed, 100,100);
	}
  }  
  
  drawSprites();
 
}