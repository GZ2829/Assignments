var code = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."


function doublewords(str){
 var arr = []
  var str1 = str.split(' ');
  for(i = 0; i < str1.length; i++){
      if(str1[i] = str1[i] * 2){
        arr.push(str1[i])
        return arr
      }
  } 
}

function doublewords(code)



const string = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const secretFinder = str => {
    let newArr = str.split(' ');
    let extras = [];
    let doubled = [];
    let final = [];
    for(let i = 0; i < newArr.length; i++){
        if(extras.indexOf(newArr[i]) === -1){
            extras.push(newArr[i])
        } else {
            doubled.push(newArr[i])
        }
    }
    for(let j = 0; j < doubled.length; j++){
        if(final.indexOf(doubled[j]) === -1){
            final.push(doubled[j])
        }
    }
    return final
}

console.log(secretFinder(string))




function duplicates(str){
    return str.split(' ')
        .filter(function(word, i, arr){ // Get all occrences of duplicates, i.e. ['foo', 'foo'].
            return i != arr.indexOf(word);
        })
        .filter(function(word, i, arr){ // Get a unique list of those duplicate occrences, i.e. ['foo'].
            return i == arr.indexOf(word);
        });
}

console.log(duplicates("Banh mi Banh pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."));