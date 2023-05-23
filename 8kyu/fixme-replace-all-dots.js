//Descriptions:
//The code provided is supposed replace all the dots . in the specified String str with dashes -
//Fix the bug so it works properly.

//My solutions:
let replaceDots = function(str) {
    return str.replace(/\./g, '-');
}

//Option 2:
var replaceDots = str => str.split('.').join('-')