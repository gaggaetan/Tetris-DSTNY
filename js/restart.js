function restartButton() {
  let button = createImg("assets/reload icon.png","")
  button.position(400,0)
  button.size(40,40)
  button.mousePressed(restart, draw)
}

function restart (){
  blocks = []
  levelTable = []
  speedStop = false
  stopMove = false
  frame = 8
  lives = 3
  redBloodFrame = 0
  
  play()
  
  for (i = 0; i<lengthNumberCase*heightNumberCase; i++){
    levelTable.push(0)
  }
  CollorDSTNY(1);
  createCanvas(blockSize*lengthNumberCase, blockSize*heightNumberCase);
  blocks.push(new Cube());
  frameRate(frame)
  imgGameOver = loadImage("assets/gameOver.png") 
  
}