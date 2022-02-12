//make sure we know that we are able to link to this code
// you can remove this if you want
// window.alert("Hello user from the js file")

// Calculate the price of all my groceries 
//let will declare a variable as well...
var priceTotal = 0

console.log("Your current total is", priceTotal)

//square bracket is for arrays
let groceries = [
    "spagetti",
    "sauce",
    "flowers",
    "chocolates"
]

console.log("Your shopping list is", groceries)

//re-assign values to the list this time with prices
groceries = [
    {"item": "spagetti", "price": .94},
    {"item": "sauce", "price": 2.64},
    {"item": "flowers", "price": 22.34},
    {"item": "chocolates", "price": 7.85}
]

console.log("groceries with prices", groceries)

//what if someone added to list
groceries.push({"item": "ice cream", "price": 6.99})
console.log("partner called addd more items to list", groceries)

console.log("Time to checkout!")

//go through the list and add up the prices
//we want a better way than this.... //priceTotal = groceries[0] + groceries[1] + groceries[2] + groceries[3]
//because our list could grow or shrink

//use for loop so the size is given to the program we don't manually set it
for (let index = 0; index < groceries.length; index++) {
    const groceryItem = groceries[index];
    console.log("buying this item", groceryItem)
    //add that groceryItem to our priceTotal
    //grab the price from groceryItem
    priceTotal = priceTotal + groceryItem.price
}

console.log("Please pay", priceTotal)