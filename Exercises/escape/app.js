var readlineSync = require('readline-sync');

var options1 = ["Join the fight", "Run", "Beg for an escort out of the warzone"]

if(readlineSync.keyInSelect(options1, "You find yourself in a rundown home, shots firing in the background. A man comes up to you with a gun. He asks you to join his fight; what do you do?")!==0){
    console.log("You are so lame, get out of my game")
} else{
    console.log("Then grab your weapon solider and lets get moving")
}

var options2 = ["start firing", "take defensive posistion", "try and run away", "Try to get the highground"]

if(readlineSync.keyInSelect(options2, "Upon leaving the house, shots fire right over your head. You immeaditely duck behind some cover. You look around wondering what to do next")==3){
        console.log("Smart move, looks like you might survive this after all")
} else if(options2==0){
        console.log("You have fired back, but to no avail")
} else{
        console.log("You are dead")
}