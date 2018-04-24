var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var sam  =[];

var dan =[];

var chill = [];

function print(x){
    for(var i = 0;  i < x.length; i++){
        sam.push(x[i])
    } return sam;
} 


console.log(print(lyrics))

function dog(z){
    for(var i = z.length; i >= 0; i--){
        dan.push(z[i])
    }   return dan
}

console.log(dog(lyrics))

function lama(t){
    for(var i = 0; i <= t.length; i+=2){
        chill.push(t[i])
    } 
    return chill
}


console.log(lama(lyrics))