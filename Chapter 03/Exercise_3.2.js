let shoppingList = ["Milk", "Bread", "Apples"];
shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList.pop());
shoppingList.sort();
console.log(shoppingList.indexOf("Milk", 0));
shoppingList.splice(1, 0, "Carrots", "Lettuce");
let shoppingList2 = ["Juice", "Pop"];
let concatList = shoppingList.concat(shoppingList2, shoppingList2);
let lastPop = concatList.lastIndexOf("Pop");
console.log(lastPop);
console.log(concatList);

//yippee