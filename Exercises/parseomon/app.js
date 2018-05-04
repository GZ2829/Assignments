var xhr = new XMLHttpRequest();



xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var display=document.getElementById("hope")
        
        
        for(var i = 0; i<20; i++){
            var holder = data.objects[0].pokemon[i][i]
            var element= document.createElement("p")
            element.innerHTML = holder;
            display.appendChild(element)
            
        }   
    }
};


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();
