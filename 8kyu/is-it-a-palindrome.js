// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

//My solutions: 
function isPalindrome(x) {
    if(x.toLowerCase() === x.split('').reverse().join('').toLowerCase()){
      return true
    }else{
      return false
    }
}

