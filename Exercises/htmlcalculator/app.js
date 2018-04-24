









document.add.addEventListener("submit", function(e){
    e.preventDefault();
    var a = document.add.ge.value;
    var b = document.add.te.value;
    var c = Number(a) + Number(b)
    document.getElementById("adda").innerHTML = c;

})

document.sub.addEventListener("submit", function(e){
    e.preventDefault();
    var a = document.sub.ce.value;
    var b = document.sub.pe.value;
    var c = Number(a) - Number(b)
    document.getElementById("subby").innerHTML = c;
})


document.multiply.addEventListener("submit", function(e){
    e.preventDefault();
    var a = document.multiply.ke.value;
    var b = document.multiply.ie.value;
    var c = Number(a) * Number(b);
    document.getElementById("multi").innerHTML = c;
})