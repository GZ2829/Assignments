function countCode(string) {
	var count = 0;
	for(var i = 0; i < string.length; i++) {
		if(string[i] === 'c' && string[i + 1] === 'o' && string[i + 3] === 'e') {
			count++;
		}
	} 
	return count;
}

function countCode(string) {
	var match = string.match(/co.e/g);
	return match ? match.length : 0;
}


function countCode(string) {
	var myArr = string.split('')
	return myArr.reduce(function(final, letter, i, arr){
		if(letter + (arr[i + 1]) + (arr[i + 3]) === "coe") {
			final++
		}
		return final;
	}, 0)
}

console.log(countCode("helloworld"));// 0
console.log(countCode("aaacodebbb"));// -> 1 
console.log(countCode("codexxcode"));// -> 2 
console.log(countCode("cozexxcope"));// -> 2
