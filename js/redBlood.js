function redBlood (){
  if (redBloodFrame > 0){
    fill("rgba(133, 6, 6,0.3)")
    rect(0,0,blockSize*lengthNumberCase, blockSize*heightNumberCase)
    redBloodFrame -= 1
  }
}