function isTouching(kk, cool)
{
  if(kk.x - cool.x < kk.width/2 + cool.width/2 && cool.x - kk.x < kk.width/2 + cool.width/2 && kk.y - cool.y < kk.height/2 + cool.height/2
    && cool.y - kk.y < cool.height/2 + kk.height/2)
  {
    return true;
  }
  else
  {
    return false;
  }  
}