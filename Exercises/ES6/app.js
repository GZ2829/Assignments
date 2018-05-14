// let name = 'John'  
// let age = 101  
// const pets = ["cat", "dog"]

// const petObjects = []

// for (var i = 0; i < pets.length; i++){  
//   let pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//     name = "fluffy"
//   } else {
//     name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }

function collectAnimals(...arg) {  
    return arg
}


// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

const fruit = ["apple", "pear"];  
const sweets = ["cake", "pie"];  
const vegetables = ["carrot"];

const food = {
    fruit,
    sweets,
    vegetables,
} 

// console.log(food)

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  const {location} = vacation;
  const {duration} = vacation;  
  
//  console.log(`We're going to have a good time in ${location} for ${duration}`)

const favoriteActivitiesInOrder ={
    firstFav: "magnets", 
    secondFav: "snowboarding", 
    thirdFav: "philanthropy", 
    fourthFav: "janitor work", 
    fifthFav: "eating"
};

const {firstFav} = favoriteActivitiesInOrder
const {secondFav} = favoriteActivitiesInOrder
const {thirdFav} = favoriteActivitiesInOrder



// console.log(`My top three favorite activities are, ${firstFav} , ${secondFav}  and ${thirdFav}`);

function combineAnimals(...newarr) {  
  newarr = [...realAnimals, ...magicalAnimals,...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];  
const magicalAnimals = ["jackolope"];  
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));



