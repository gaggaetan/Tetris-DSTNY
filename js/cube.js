class Cube {
  constructor(){
    this.collors = [2,3];
    this.collor = random(this.collors);
    this.place = floor(random(0,21))
    this.oldCollor = levelTable[this.place]
    this.diagonal = 0
  }
  display(){
    levelTable[this.place-22+this.diagonal] = (this.oldCollor2)
    levelTable[this.place] = (this.collor)
    this.diagonal = 0 
  }
  move(){
    this.place += 22
    if (levelTable[this.place] == 0 || levelTable[this.place] == 1){
      this.oldCollor2 = this.oldCollor
      this.oldCollor = levelTable[this.place]
      blocks[blocks.length-1].display()
    }else{
      this.place -=22
      if (this.collor == 2 && this.oldCollor == 1){
        blocks.push(new Cube())
      }else if (this.collor == 3 && this.oldCollor == 0){
        blocks.push(new Cube())
      }else{
        lives -= 1
        redBloodFrame = 2
        if (lives < 1){
          end()
        }else{
          levelTable [this.place] = this.oldCollor
          blocks.pop()
          blocks.push(new Cube())
        }
        
      }   
    }
  }
  moveHorizontal (a){
    if (this.place/lengthNumberCase == floor(this.place/lengthNumberCase) && a == -1){
      
    }else if((this.place+1)/lengthNumberCase == floor((this.place+1)/lengthNumberCase) && a == 1){
      
    }else{
      this.place += a
      this.diagonal -= a
    }
  }
}