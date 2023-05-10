//Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, 
//you can assume that the input data is always a string, no need to verify it.

//My solutions:
function remove (string) {
    if(string[string.length-1] === '!'){
      return string.slice(0,-1)
    }else{
      return string
    }
}

//option 2:

const remove = s => s.replace(/!$/, '')

//option 3: 

function remove(string){
    return string.endsWith('!')? string.slice(0,-1) : string
}