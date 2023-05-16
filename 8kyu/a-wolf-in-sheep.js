//Descriptions: 


//My solutions: 
function warnTheSheep(queue) {
    let uniqueIndex = queue.length - queue.indexOf('wolf') - 1
    return uniqueIndex != 0? 
    `Oi! Sheep number ${uniqueIndex}! You are about to be eaten by a wolf!`:
    "Pls go away and stop eating my sheep"
}