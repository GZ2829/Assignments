var sorted=([  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ]);


  var newarr = sorted.filter(function(people){
    return newarr1 = people.age > 18
  }).sort(function(a,b){
    if (a.lastName < b.lastName)
    return -1;
    if (a.lastName > b.lastName)
    return 1;
  return 0;
})

  

  console.log(newarr)

  function toDisplayInHTML(arr){
    arr = arr.sort( (a, b) => b.age - a.age );
    arr = arr.map( person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>` );
    return arr;
}

console.log(toDisplayInHTML(people));