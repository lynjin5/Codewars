//Descrptions: 
//Create a function that accepts a list/array and a number n, 
//and returns a list/array of the first n elements from the list/array.

//My solutions: 
function take(arr, n) {
    return arr.slice(0, n)
}

//option 2: 

const take = (arr, n) => arr.slice(0,n)