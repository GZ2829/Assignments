// ES6 Classes
 

// Animals, Dog, Cat


class Animals {
    constructor(type, isMammal, color, sound){
        this.type = type;
        this.isMammal = isMammal;
        this.color = color;
        this.sound = sound;
    }
    speak() {
        console.log(this.sound)
    }
}


class Dog extends Animals {
    constructor(type, isMammal, color, sound){
        super(type, isMammal, color, sound);
    }
}

class Cat extends Animals {
    constructor(type, isMammal, color, sound){
        super(type, isMammal, color, sound);
    }
}


var spot = new Dog('Lab', true, 'black', 'rrrrruff!');

