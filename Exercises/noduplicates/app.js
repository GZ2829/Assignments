
function removeDuplicates(str){

var noDuplicates = [];

var theExtras = [];

for (var i = 0; i< str.length; i++)
    if(noDuplicates.indexOf(str[i]) === -1) {
        noDuplicates += str[i];
} else {
    theExtras += str[i];
}
return noDuplicates;
}





console.log(removeDuplicates("bookkeeper larry"));
