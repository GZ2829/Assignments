var div1 = document.getElementById("box1")

var div2 = document.getElementById("box2")

var div3 = document.getElementById("box3")

var div4= document.getElementById("box4")

var div5= document.getElementById("box5")

function red(){
    div1.style.backgroundColor="blue"
}

function yel(){
    div2.style.backgroundColor="red"
}

function violet(){
    div3.style.backgroundColor="yellow"
}


function gray(){
    div4.style.backgroundColor="green"
}

function last(){
    div5.style.backgroundColor="orange"
}

div1.addEventListener("mousemove",red)

div2.addEventListener("mousedown", yel)

div3.addEventListener("mouseup", violet)

div4.addEventListener("dblclick", gray)

div5.addEventListener("mouseout", last)
