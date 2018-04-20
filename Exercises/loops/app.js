for (var i = 0; i < 9; i++){
    console.log(i)
}

for (var i = 9; i > 0; i--){
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}


var olympics=[]

for (var i = 0; i <= 9; i++){
    olympics.push(i)
}

console.log(olympics)

for (var i = 0; i <= 100; i+=2){
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruities=[]

for (var i= 0; i < fruit.length; i+=2){
    fruities.push(fruit[i])
}

console.log(fruities)

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

 for (var i = 0; i <= peopleArray.length; i++){
     console.log(peopleArray.name[i])
 }