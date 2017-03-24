var player1button = document.getElementById("p1button")
var player2button = document.getElementById("p2button")
var reset = document.getElementById("reset")
var h1player = document.getElementById("p1score")
var h2player = document.getElementById("p2score")
var maxvalue = document.getElementById("maxvalue")
var clickks2 = 0;
var clickks = 0;

reset.addEventListener("click",function(){
  h1player.innerHTML = "0"
  h2player.innerHTML = "0"
  maxvalue.value = 0;
  player1button.disabled = false;
  player2button.disabled = false;
  h1player.style.color = "black"  ;
  h2player.style.color = "black"  ;

  clickks2 = 0;
  clickks = 0;
})

player1button.addEventListener("click",function clicks(){
clickks = clickks+1;
if(clickks == maxvalue.value){
  player1button.disabled = true;
  player2button.disabled = true;
  h1player.style.color = "green"  ;
}
  h1player.innerHTML = clickks;
})

player2button.addEventListener("click",function clicks2(){
clickks2 = clickks2+1;
if(clickks2 == maxvalue.value){
  player1button.disabled = true;
  player2button.disabled = true;
  h2player.style.color = "green"  ;
}
  h2player.innerHTML = clickks2;
})
