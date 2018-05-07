

function isPalindrome(str){
    var alphabet = 'abcdefghijklmnopqrstuvwyx';
    // Iterate/Loop through the string to build a string of only letters
    var myArr = str.split('');
    var myStr = '';
        myArr.forEach(function(char){
                for(var i = 0; i < alphabet.length; i++){
                    if(char.toLowerCase() === alphabet[i]){
                        myStr += char;
                    }
                }
            })
    // new string === reversed new string
    return myStr.toLowerCase() === myStr.toLowerCase().split('').reverse().join('');
}

function isPalindrome(str){
    var arr = str.toLowerCase().split('').filter(function(char){
        return 'abcdefghijklmnopqrstuvwyx'.indexOf(char) >= 0;
    })
    return arr.join('') === arr.reverse().join('');
}

function isPalindrome(str){
    var bareString = str.replace(/[^a-zA-Z]/g, '')
    return bareString.toLowerCase() === bareString.toLowerCase().split('').reverse().join('');
}



console.log(isPalindrome("Star Rats!"));  // true  
console.log(isPalindrome("palindrome"));  // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true  