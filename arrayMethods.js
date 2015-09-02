// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!


var nameArray = [];
nameArray.push('Anna', 'Turnipseed');

// push 6-10 to genericNumberArray

genericNumberArray.push(6, 7, 8, 9, 10);

// pop (remove) the last element from var colors, 'Charlie'//

popResult = colors.pop();

// reverse var 'scrambledWords'

scrambledWords.reverse();

// reverse var 'phoneNumber'

phoneNumber.reverse();

//shift () orderQueue remove first element 'takeOut: 'Ice Cream'
// nextOrder needs to store the return value

var nextOrder = orderQueue.shift();

//sort mixedNums array

mixedNums.sort();

// sort mixedWords array

mixedWords.sort();

// remove elements of fruitCollection so that only fruits remain

notFruit = fruitCollection.splice(1, 3);

// remove non gems from gemBox

gemBox.splice(5, 2);
gemBox.splice(6, 4);

// splice up 10 into [1, 2, 9, 10]


upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

// splice to only include "brown"

brownOnly.splice(1, 5, 'brown', 'brown', 'brown');

//unshift orderedValues

var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

//concat randomThingsArray by joining genericNumberArray and colors

var randomThingsArray = genericNumberArray.concat(colors);

//concat updatedOrders by joining orderQueue


var challenge = [{ takeOut : 'Sushi'}, { takeOut : 'Waffles'}];

var updatedOrders = challenge.concat(orderQueue);

// join sentence of 'scrambledWords'

var sentence = scrambledWords.join(' ');

// join sentence with variable myfruits of array fruitcolleciton

var myFruits = fruitCollection.join(' + ' );

// slice 'favoriteFriends' stores favs from friends array

var favoriteFriends = friends.slice(1, 3);

// owesMoney var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];


var owesMoney = friends.slice(5);














