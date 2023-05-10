//Descriptions: 
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.


//My solutions:
function replace(s){
    return s.replace(/[aeiou]/ig, '!')
}

//option 2
const replace = s => s.replace(/[aeiou]/ig, '!')