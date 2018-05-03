var btn = document.getElementById('submitBtn');
var input = document.getElementById('userInput');
var errDisplay = document.getElementById('errMessage');
var finalDisplay = document.getElementById('finally');

btn.addEventListener('click', checkInput);

// try, catch, finally

function checkInput(){
    var value = input.value;

    try {
        if(value < 1){
            throw 'Too low';
        } else if(value > 100){
            throw 'Too high';
        } else if(isNaN(value)){
            throw 'You must enter a number dummy.'
        } 
    }
    catch(err) {
        errDisplay.textContent = err
    }
    finally {
        finalDisplay.textContent = `I'm running no matter what.`
    }
}