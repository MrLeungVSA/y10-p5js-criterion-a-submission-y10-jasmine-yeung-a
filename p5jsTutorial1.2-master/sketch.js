function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(149,0,0);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,154,165);

	// modifies the thickness of the border of an object
	strokeWeight(10);


	rect(10,10,100,50);


	fill(0,154,165);    
	stroke(149,0,0);
	strokeWeight(10);

	rect(130,10,100,50);
		

}