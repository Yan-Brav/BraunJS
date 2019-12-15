const arr = ["b", "c", "d"];
//test push
console.log(arr.push("e"));
console.log(arr);
//test pop
console.log(arr.pop());
console.log(arr);
//test unshift
console.log(arr.unshift("a"));
console.log(arr);
//test shift
console.log(arr.shift());
console.log(arr);
console.log("-----------");
//concat testing
const arr1 = [1, 2, 3,];
console.log(arr1.concat(4, 5, 6,));
console.log(arr1);
console.log(arr1.concat([4, 5, 6]));
console.log(arr1);
console.log(arr1.concat([4, 5], 6));
console.log(arr1);
console.log(arr1.concat([4, [5, 6]]));
console.log(arr1);
console.log("-----------");
//slice testing
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(3));
console.log(arr2);
console.log(arr2.slice(2, 4));
console.log(arr2);
console.log(arr2.slice(-2));
console.log(arr2);
console.log(arr2.slice(1, -2));
console.log(arr2);
console.log(arr2.slice(-2, -1));
console.log(arr2);
console.log("-----------");
//splice testing
//first arg - index from start changing
//second arg - number of deleted elements
//the rest args - elements for addition
const arr3 = [1, 5, 7];
console.log(arr3.splice(1, 0, 2, 3, 4));
console.log(arr3);
console.log(arr3.splice(5, 0, 6));
console.log(arr3);
console.log(arr3.splice(1, 2));
console.log(arr3);
console.log(arr3.splice(2, 1, 'a', "b"));
console.log(arr3);
console.log("-----------");
//copyWithin testing
const arr4 = [1, 2, 3, 4];
console.log(arr4.copyWithin(1, 2));
console.log(arr4.copyWithin(2, 0, 2));
console.log(arr4.copyWithin(0, -3, -1));
console.log("-----------");
//fill testing
const arr5 = new Array(5).fill(1);
console.log(arr5);
console.log(arr5.fill("a"));
// console.log(arr5);
console.log(arr5.fill("b", 1));
// console.log(arr5);
console.log(arr5.fill("c", 2, 4));
// console.log(arr5);
console.log(arr5.fill(5.5, -4));
// console.log(arr5);
console.log(arr5.fill(0, -3, -1));
// console.log(arr5);
console.log("-----------");
//reverse and sort testing
const arr6 = [1, 2, 3, 4, 5];
console.log(arr6.reverse());
console.log(arr6.sort());
const arr7 = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];
console.log(arr7.sort());
console.log(arr7.sort((a, b) => a.name > b.name));
console.log(arr7.sort((a, b) => a.name[3] > b.name[3]));
console.log("-----------");
//indexOf and lastIndexOf testing
const o = {name: "Jerry"};
const arr8 = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(arr8.indexOf(5));
console.log(arr8.lastIndexOf(5));
console.log(arr8.indexOf("a"));
console.log(arr8.lastIndexOf("a"));
console.log(arr8.indexOf({name: "Jerry"}));
console.log(arr8.indexOf(o));
console.log(arr8.indexOf([1, 2]));
console.log(arr8.indexOf("9"));
console.log(arr8.indexOf(9));
console.log(arr8.indexOf("a", 5));
console.log(arr8.indexOf(5, 5));
console.log(arr8.lastIndexOf(5, 4));
console.log(arr8.lastIndexOf(true, 3));
console.log("-----------");
//findIndex and find testing
const arr9 = [{id: 5, name: "Judith"}, {id: 7, name: "Francis"}];
console.log(arr9.findIndex(o => o.id === 5));
console.log(arr9.findIndex(o => o.name === "Francis"));
console.log(arr9.findIndex(o => o === 3));
console.log(arr9.findIndex(o => o.id === 17));
console.log(arr9.find(o => o.id === 5));
console.log(arr9.find(o => o.id === 2));
const arr10 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr10.find((x, i) => i>1 && Number.isInteger(Math.sqrt(x))));
console.log("-----------");
//some and every testing
const arr11 =[5, 7, 12, 15, 17];
console.log(arr11.some(x => x%2 === 0));
console.log(arr11.some(x => Number.isInteger(Math.sqrt(x))));
const arr12 = [4, 25, 16, 36];
console.log(arr12.every(x => x%2 === 0));
console.log(arr12.every(x => Number.isInteger(Math.sqrt(x))));
console.log("-----------");
//map testing
const cart = [{name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95}];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8);
const lcNames = names.map(x => x.toLowerCase());
// const lcNames = names.map(String.toLowerCase);
console.log(names);
console.log(prices);
console.log(discountPrices);
console.log(lcNames);
console.log("-----------");
const items = ["Widget", "Gadget"];
const prices1 = [9.95, 22.95];
const cart1 = items.map((x, i) => ({name: x, price: prices1[i]}));
console.log(cart1);
console.log("-----------");
//filter testing
//create playing cards suite
const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
	for(let value = 1; value <= 13; value++)
		cards.push({suit, value});
//getting all cards with value = 2
console.log(cards.filter(c => c.value === 2));
console.log("-----------");
//getting all diamond
console.log(cards.filter(c => c.suit === 'D'));
console.log("-----------");
//getting all shapes
console.log(cards.filter(c => c.value > 10));
console.log("-----------");
//getting all shapes of hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));
console.log("-----------");
