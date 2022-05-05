const blockSize = 20
const lengthNumberCase = 22
const heightNumberCase = 27
let levelTable
let blocks
let frame
let speedStop
let start
let button
let stopMove
let lives
let redBloodFrame




function setup() {
  blocks = []
  levelTable = []
  speedStop = false
  stopMove = false
  frame = 8
  start = 0
  lives = 3
  redBloodFrame = 0
  
  for (i = 0; i<lengthNumberCase*heightNumberCase; i++){
    levelTable.push(0)
  }
  CollorDSTNY(2);
  createCanvas(blockSize*lengthNumberCase, blockSize*heightNumberCase);
  blocks.push(new Cube());
  frameRate(frame)
  imgGameOver = loadImage("assets/gameOver.png")
  imgheart = loadImage("assets/heart.png")
  
  button = createImg("assets/play.png","")
  
  button.position(120,150)
  button.size(200,200)
  button.mousePressed(play2)
  
}

function draw() {

    
  for (i=0; i<blockSize*lengthNumberCase; i+=blockSize){
    for (z=0; z<blockSize*heightNumberCase; z+=blockSize){
      if (goToLevelTable(i,z) == 0){
        fill(100)
      }else if (goToLevelTable(i,z) == 1){
        fill(50)
      }else if (goToLevelTable(i,z) == 2){
        fill("rgb(0, 165, 181)")
      }else{
        fill("rgb(255, 144, 21)")
      }
        rect(i,z,blockSize,blockSize);
    }
  }
  
  redBlood()
  if (start == 1){
    blocks[blocks.length-1].move();
    
    speedEvolve()
  }
  
  
  restartButton()
  points()
  speed()
  live()
  

  
  


}

function play (){
  start = 1
  button.position(-1000,-1000)
  
}
function play2 (){
  CollorDSTNY(1);
  start = 1
  button.position(-1000,-1000)
}

function keyPressed() {
    if (keyCode == LEFT_ARROW && stopMove == false){
      blocks[blocks.length-1].moveHorizontal(-1)
    }else if(keyCode == RIGHT_ARROW && stopMove == false){
      blocks[blocks.length-1].moveHorizontal(1)
    }
}

function end (){
  speedStop = true;
  stopMove = true
  image(imgGameOver,-10, -50, 450, 450)
  
  button.position(120,230)
  button.mousePressed(restart, draw, play)
  fill("white")
  textStyle(BOLD)
  text("You are not a true member of DSTNY", 110 ,450, 300, 300)
  textStyle(NORMAL)
}

function live () {
  image(imgheart, 23, 75, 25, 25)
  image(imgheart, 53, 75, 25, 25)
  image(imgheart, 83, 75, 25, 25)
}