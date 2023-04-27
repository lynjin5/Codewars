// Description:
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. 
// In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// My solutions: 

function getRealFloor(n){
    return n>13? n-2:
    n>0? n-1:
    n;
}

// Option 2:

function getRealFloor(n){
    if (n>13){
        return n-2
    }else if(n>0){
        return n-1
    }else{
        return n
    }
}