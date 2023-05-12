//Descriptions: 
//Create a function called shortcut to remove the lowercase 
//vowels (a, e, i, o, u ) in a given string.
//Example: 
//"hello"     -->  "hll"

//My solutions:
function shortcut (string) {
    return string.replace(/[aeiou]/g,'')
}