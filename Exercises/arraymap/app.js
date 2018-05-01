arr = [1,2,3,4,5,6,7,8,9]


var doublenum = arr.map(function(num){
    return num * 2
})



var mkstr = arr.map(function(num){
    var ne = num.toString();
        return ne
})



var capitalNames = (["john", "JACOB", "jinGleHeimer", "schmidt"]);

var capitalizeNames = capitalNames.map(function(arr){
        var cap = arr.slice(0,1).toUpperCase();
        var newCap = arr.slice(1).toLowerCase();
        return cap + newCap   
})


var arrName = namesOnly.map(function(newArr){
        var newArr = namesOnly.name
        return newArr
    })




var namesOnly = ([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 


console.log(arrName)