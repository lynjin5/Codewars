//Descriptions:
//write a function where it returns a number with only the zeros removed.
//For example: 
//890 -> 89
//145000 -> 145
//609 -> 609

//My solutions:
function noBoringZeros(n) {
    return Number(String(n).replace(/0+$/,''));
}

