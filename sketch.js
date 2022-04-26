var box1, box2
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(10,20,50,50,2,1)
  box2=new Box(100,30,50,50,7,5)
}

function draw() 
{
  background(220);
  box1.show()
  box1.moveup()
  box1.moveright()
  box2.show()
  box2.moveup()
  box2.moveright()

}

