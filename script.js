var timer= 60;
var score=0
var hitRn=0;
function increaseScore(){
    score+=10
    document.querySelector("#scoreval").innerHTML= score
}

function getNewHit(){
  hitRn = Math.floor(Math.random()*10)
   document.querySelector("#hitval").innerHTML=hitRn
}

function makeBubble(){

    var clutter = ""

    for(var i =1;i<=168; i++){
        var rn = Math.floor(Math.random()*10)
        clutter+=`<div id="bubble">${rn}</div>`
         
    }
    document.querySelector("#pbtm").innerHTML=clutter  
}



function runTimer(){
  var timerint= setInterval(() => {
     if(timer>0){
        timer--
        document.querySelector("#timerval").innerHTML= timer

     }else{
        clearInterval(timerint)
        document.querySelector("#pbtm").innerHTML=`<h1>Game over</h1`
     }
    
   
   }, 1000);
    
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickedNum= Number(dets.target.textContent)
   if(clickedNum===hitRn){
    increaseScore()
    makeBubble()
      getNewHit()
   }
})

getNewHit()
runTimer()
makeBubble()