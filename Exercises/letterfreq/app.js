var phrase = 'slimy smelly solution'; 

function phrases(x){
    var freq ={};
    for(i = 0; i < x.length; i++){
        if(freq[x[i]]){
            freq[x[i]]++
           

    }   else{
        freq[x[i]] = 1;
       
    }
    }   return freq
}


console.log(phrases(phrase))


