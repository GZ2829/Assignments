class player {
    constructor(name,totalCoins,status){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.haveStar = false;
        this.isGameActive = true;
}
    setname(namePicked){
        char = ['Mario', 'Luigi']
        random = char[Math.floor(Math.random) * char.length]
        this.name = char[random]
    }

    gotHit(){
        if (this.status === 'Powered Up'){
            this.status = 'Big'
            this.haveStar = false

        }else if (this.status === 'Big'){
            this.status = 'Small'
            this.haveStar = false

        }else if (this.status === 'Small'){
            this.status = 'Dead' 
            this.isGameActive = false
            this.haveStar= false
        }
    }
    
    gotPowerup(){
        if(this.status === 'Small'){
            this.status = 'Big'
            this.haveStar = false
            
        }else if(this.status === 'Big'){
            this.status = 'Powered Up'
            this.haveStar = true
        }
    }

    addCoins(){
        this.totalCoins += 10
    }

    print(){
        console.log('Name: ' + player1.name)
        console.log('Total Coins: ' + player1.totalCoins)
        console.log('Status: ' + player1.status)
        console.log('Have a Star? ' + player1.haveStar)
        console.log('Active game? ' + player1.isGameActive)
    }
}


var player1 = new player('Mario', 2, 'Small', false, true)

function randomRange (){
    var random = Math.floor(Math.random()* 3 + 1)
        if(random === 1){
            player1.gotHit()
            player1.print()
            
            
        }
        if(random === 2){
             player1.gotPowerup()
             player1.print()
             
             
        }
        if(random === 3){
             player1.addCoins()
             player1.print()
             
             

        }
}

while(player1.isGameActive){
    randomRange()
}
 
 