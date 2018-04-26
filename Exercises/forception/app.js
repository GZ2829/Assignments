var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var final=[]  

for(var i=0; i < people.length; i++){
        final.push(people[i])
    for(var j=0; j < alphabet.length; j++){
        final.push(alphabet[j])
    }
}     
    console.log(final)