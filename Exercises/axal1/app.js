var todou = 'https://api.vschool.io/greg28/todo';
var display = document.getElementById('todos')

var data = axios.get(todou).then(function(response){
    displayData(response.data)
})

// .then(function(response){
//         console.log(response.data.filter(function(todo){
//             console.log(todo)
//         }))
// })

// var luke = axios.get('https://swapi.co/api/people/1').then(function(response){
//         console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })

// console.log(luke)

document.holy.addEventListener('submit',function(e){
    e.preventDefault();

    var doe = {
        title: document.holy.title.value,
        description: document.holy.description.value,
        price: document.holy.price.value,
        image: document.holy.image.value
    }

    axios.post(todou, doe).then(function(response){
            console.log(response.data)
    })
})



function displayData(arr){
    if(arr.length){
        arr.map(function(todou){

            var title = document.createElement('h2');
            title.textContent = todou.title;
        
            var description = document.createElement('h4');
            description.textContent = todou.description;
        
            var price = document.createElement('h6')
            price.textContent = todou.price;

            var input = document.createElement('input')
            input.type = "checkbox"

            var image = document.createElement('img')
            image.src = todou.imgUrl;


            display.appendChild(image)
            display.appendChild(input)
            display.appendChild(title);
            display.appendChild(description);
            display.appendChild(price);

        })
    }
}