function goToLevelTable (x,y){
  return levelTable[floor(x/blockSize)+floor(y/blockSize*lengthNumberCase)]
}