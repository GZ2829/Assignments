 var readline = require('readline-sync')
 var chalk = require('chalk')

 var loot = [{
     Name: "Health potion",
     Description: "Restores HP"
 },{ Name: 'AP Potion',
    Description: "Restores AP"
 },{
     Name: "Potion of might",
    Description: "Next attack hits"
 }]

var Inventory = []


// // character creation  
// // walking  
// // running from a fight  
// // fighting  
// // enemy creation  
// // attacking enemy  
// // enemy attacking  
// // enemy dying (including dropping an item)  
// // character dying 

var classes = [chalk.red('Warrior: A master of weapons and fighting'), 'Rouge: A sly combatant relying on bows and daggers', 'Monk: servents of god who carry a staff and pursue justice', 'Wizard: masters of the arcane, masters in all schools of magic', 'Witchhunter: Hunters who rely on a mix of conjuration, illusion and bows to win there fights', 'Battlemage: a combination of melee weapons and destruction magic to win your fights', 'Paladin: Warriors who use healing and protection magic to heal themselves and vanquish the undead']

function charCreation(name,job,hp,ap){
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.ap = ap;

} 

function enemies(title, hp, ap){
    this.title = title;
    this.hp = hp;
    this.ap = ap;
}

var bandit = new enemies('bandit', 100, 100)
var ogre = new enemies('ogre', 100, 100)
var witch = new enemies('witch', 100, 100)

var ene = [bandit,ogre,witch]



var names = readline.question(chalk.red("\n(As you approach the city gates, A old man blocks your path) Welcome to Dune City adventurer, here is a land of misfits and rebels. You must build your own way in this city if you seek to survive, Tell me your name: "))

var answers = readline.keyInSelect(classes, chalk.red("Thank you " + names + ". This is a rough place to survive, there are guards but they focus on protecting the king, you will have to know how to survive on your own, Do you have a class?: "))

if(answers == 0){
    console.log(chalk.blue("\nThere are alot of warriors in Dune city, you should fit in fine"))
    var myCharacter = new charCreation(names, 'Warrior', 250, 120)
} else if(answers == 1){
    console.log("\nA master of the shadow I see, there is plenty of work for those who cant be noticed")
    var myCharacter = new charCreation(names, 'Rouge', 170, 140)
} else if(answers == 2){
    console.log("\n(The old man bows to you) Tread carefully monk, this is not the monastary where you grew up")
    var myCharacter = new charCreation(names, 'Monk', 220, 120)
} else if(answers == 3){
    console.log("\nI see, Wizards are always in demand around here, though the king feels threatned by them")
    var myCharacter = new charCreation(names, 'Wizard', 120, 230)
} else if(answers == 4){
    console.log("\nInteresting, I thought the remaining Witchhunters were killed in the Great hill massacare, blasted witches")
    var myCharacter = new charCreation(names, 'Witchhunter', 150, 200)
} else if(answers == 5){
    console.log("\nBattlemages aren't as welcome here as they used to be, not since a band of them attacked a city a few years back. Just don't go around screaming what you do")
    var myCharacter = new charCreation(names, 'Battlemage', 170, 170)
} else if(answers == 6){
    console.log("\nThe citizens here love a warrior of the light, you will find friends here")
    var myCharacter = new charCreation(names, 'Paladin', 200, 150)
}

console.log("\nWell im sure you can make your way around this city just fine, be sure to keep your guard up (The old man walks away)")

// while(myCharacter.hp > 0){
//     function walk(){
//         var moves = ['walk', 'run', 'rest']
//         var index = readline.keyInSelect(moves, "Shall we move foward? (Press w to walk)")
//             if(moves[index] = "walk"){
//                 var random = Math.floor(Math.random()* 4 + 1)
//                 if(random === 1){
//                      fight()
                    
//                     console.log('you fought and died')
//                     //this makes it break out of the loop
//                     myCharacter.hp = 0
//                 } else{
//                     run()
//                     console.log("No one has appeared")
//                 }
//             }else{
//                 walk()
//             }
    
    
//     }
// } 
// // }
walk()
function walk(){
    var moves = ['walk', 'run', 'rest']
    var index = readline.keyInSelect(moves, "Shall we move foward? (Press w to walk)")
        if(moves[index] = "walk"){
            var random = Math.floor(Math.random()* 4 + 1)
            if(random === 1){
                 fight()
                
                console.log('you fought and died')
                //this makes it break out of the loop
                myCharacter.hp = 0
            } else{
                run()
                console.log("No one has appeared")
            }
        }else{
            walk()
        }


}

function run(){
    var random = Math.floor(Math.random()* 4 +1)
    if (random === 4){
        console.log('You ran away, coward!')
            return walk()
    }else{
        console.log('nice')
    }
}


function fight(){
    var choices = ['Fight', 'Run','Inventory']
    var kite = readline.keyInSelect(choices, "\nAn enemy appears from the shadow looking to take your life, do you fight?")
    console.log(choices)   
    if(choices[kite] === 'Fight'){
            console.log("\nPrepare for battle")
              function attackEnemy(){
               var random1 = Math.floor(Math.random()* 3)
                if(random1 === 2){
                    console.log("\nYou have hit the enemy, it was super effective")
                }else{
                    console.log("\nYou Miss!")
                }
                enemyCreation()
                enemyAttack()

                }
            }if(choices[kite]==='run'){
                function run(){
                    var random = Math.floor(Math.random()* 5 +1)
                    if (random === 4){
                        console.log('You have Escaped')
                            return walk()
                    }else{
                        console.log('Your Attempt at running failed')
                    }
                }
                
            console.log("\nbad")
        } if(choices[kite]==='Use Potion'){
            var inv = readline.keyInSelect(Inventory, 'Choose From your Inventory')
                if(Inventory.name === 'Health Potion'){
                    myCharacter.hp + 50;
        }       if(Inventory.name === 'AP Potion'){
                    myCharacter.ap + 50;
        }}

}
fight()






function attackEnemy(){
    var random1 = Math.floor(Math.random()* 3)
     if (random1 === 2){
         console.log("\nYou have hit the enemy, it was super effective")
     }else{
         console.log("\nYou Miss!")
     }}

console.log(attackEnemy())












function enemyAttack(){
    random = Math.floor(Math.random()*4)
        if(random === 2){
        myCharachter.hp - 10
        }else{
            console.log("Miss")
        }
        return fight()
}

function die(){
    if(myCharacter.hp = 0){
        console.log("You are dead")
    }
}

function enemyDie(){
     var enemy = ene
    if(enemy.hp = 0){
        console.log("Enemy defeated, you win")
        var ran = loot[Math.floor(Math.random() * loot.length)]
            Inventory.push(ran)
        return walk
    }
}

function enemyCreation(){
    var rand = ene[Math.floor(Math.random() * ene.length)];
     enemyAttack()
    

}