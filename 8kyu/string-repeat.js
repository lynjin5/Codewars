// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//My solutions:
function repeatStr (n, s) {
    let output = ''
    for(let i=1; i<=n; i++){
      output += s
    } return output
}

//Option 2: 
function repeatStr (n, s) {
    return s.repeat(n);
}