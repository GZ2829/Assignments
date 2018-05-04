var dictionary = {}

function addWord (word, define){
    if(!word.match(/([^aiou])s/)) {
    dictionary[word] = define;
    return dictionary[word]
    }else{
        return "purals are not allowed"
    }
}

function lookItUp(word){
    return dictionary[word]
}
module.exports = {
    addWord,
    lookItUp
}