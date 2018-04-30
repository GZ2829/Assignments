
var str = ""


function antiCaps(str){
    var string = ""
    for(i=0; i<=str.length; i++)
    if(str[i]===str.toLowerCase(i)){
        string += str[i].toUpperCase()
}   else if(str[i]===str.toUpperCase()){       
        string += str[i].toLowerCase()

}
}


console.log(antiCaps("helLO"))

