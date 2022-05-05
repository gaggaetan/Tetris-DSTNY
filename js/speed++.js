function speed(){
  textSize(25)
  fill("white")
  if (frame<25 && speedStop == false){
    frameRate(frame)
    text ("speed :" + floor(frame), 23, 45, 1000, 1000)
  }else if(speedStop == true){
    text ("speed :" + floor(frame), 23, 45, 1000, 1000)
  }else {
    frame = "max"
    text ("speed : " + frame, 23, 45, 1000, 1000)
  }
}

function speedEvolve (){
  if (frame<25 && speedStop == false){
    frame += 0.05
    frameRate(frame)
  }
} 
  