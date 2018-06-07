var submit = document.getElementById("subb")


submit.addEventListener("click", total)

function total(){
    var goomba = Number(document.getElementById("h").value) * 5
    var bomb = Number(document.getElementById("i").value) * 7
    var cheep = Number(document.getElementById("j").value) * 11
    console.log(goomba)
    var gold = goomba + bomb + cheep
    
    document.getElementById("answer").textContent = gold;

}


