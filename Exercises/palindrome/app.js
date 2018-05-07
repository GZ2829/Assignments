function palindrome(str){
//to determine if string starts and ends with same charachters
for(var i = str.length; i > 0; i++){
    if(str[i] = str.charAt(str[i]) - 1){
            return true;
        }else{
            return false;
        }
    }

} 

console.log(palindrome("starrats"))