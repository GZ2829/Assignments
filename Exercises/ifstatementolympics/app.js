if(5>3){
    console.log("5 is greater then 3")
}

if("cat"==3){
    console.log("yes it is the length of 3")
} else{
    console.log("no it is not")
}


if("cat"==="dog"){
    console.log("This is true")
} else{
    console.log("not the same")
}

var person = {
    name: "bobby",
    age: 12
}

if(person.age >=18){
    console.log("You can see this movie")
} else{
    console.log("Access Denied")
}

if(person.name[0]==="b"){
    console.log("You can see this movie")
} else{
    console.log("Access Denied")
}

if(person.age>18 && person.name[0] ==="b"){
    console.log("you can see this movie")
} else{
    console.log("Access Denied")
}

if(1==="1"){
    console.log("Strict")
} else if(1=="1"){
    console.log("Loose")
} else{
    console.log("Not Equal at all")
}   

if(1<=2 && 2 === 4){
    console.log("Yes")
} else{
    console.log("Not correct")
}

if(typeof "dog"== string){
    console.log(typeof "dog")
}