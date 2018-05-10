var todou = 'https://api.vschool.io/greg28/todo';
var display = document.getElementById('todos')

var data = axios.get(todou).then(function(response){
    displayData(response.data)
})

document.holy.addEventListener('submit',function(e){
    e.preventDefault();

    var doe = {
        title: document.holy.title.value,
        description: document.holy.description.value,
        price: document.holy.price.value,
        imgUrl: document.holy.image.value
    }

    axios.post(todou, doe).then(function(response){
            console.log(response.data)
    })
})

function deleteTodo(id){
    if(confirm('Are you sure you want to delete')){
        axios.delete(todou + '/' + id).then(function(response){
            console.log('Succesfully Deleted')
            })
        }
}
function displayData(arr){
    if(arr.length){
        arr.map(function(todou){

            var id = document.createElement('h5');
            id.textContent = todou._id

            var title = document.createElement('h2');
            title.textContent = todou.title;
        
            var description = document.createElement('h4');
            description.textContent = todou.description;
        
            var price = document.createElement('h6')
            price.textContent = todou.price;

            var input = document.createElement('input')
            input.type = 'checkbox'
            
            var img = document.createElement('img')
            img.src = todou.imgUrl;

            var delet = document.createElement('button')
            delet.textContent = 'DELETE';
            delet.onclick = ()=> deleteTodo(todou._id)
          

            display.appendChild(title);
            display.appendChild(description);
            display.appendChild(price);
            display.appendChild(img);           
            display.appendChild(delet);
            display.appendChild(input);


        })

    }
}