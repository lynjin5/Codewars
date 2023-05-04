// Descriptions:
// Complete function saleHotdogs. function accepts 1 parameter:n, 
// n is the number of hotdogs a customer will buy, different numbers have different 
// prices, return how much money will the customer spend to buy that number of hotdogs.

// n<5, price per unit is 100
// n>=5 and n<10, price is 95
// n>=10, price is 90

//My solutions: 
function saleHotdogs(n){
    return n<5 ? n*100 : n>=10 ? n*90 : n*95
}
// option 2:
const saleHotdogs = n => n*(n<5?100:n<10?95:90)

//option 3:
function saleHotdogs(n){
    if (n<5) return n*100;
    if (n>=5 && n<10) return n*95;
    else return n*90
}
