const name = 'John'  
const age = 101  
const pets = ["cat", "dog"]

const petObjects = []

for (var i = 0; i < pets.length; i++){  
  var pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}