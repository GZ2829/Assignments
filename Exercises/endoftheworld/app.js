var num=20;

var hello = document.getElementById("timers")


var endOfTheWorld = setInterval(function(){
    num-=1;
    hello.textContent = num;
     if(num <= 0){
        hello.textContent= "we're all dead";
        clearInterval(endOfTheWorld);
     }
}, 1000)




