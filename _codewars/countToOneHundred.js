/*
Count to One Hundread without using numbers
*/

let zeroArray = [];
let oneArray = ["ni"];

let realZero = zeroArray.length;
let realOne = oneArray.length;



let oneHundredString = realOne.toString(realOne+realOne) + realZero.toString(realOne+realOne) + realZero.toString(realOne+realOne);
let realOneundread = parseInt(oneHundredString);

for (i = realZero; i <= realOneundread; i++) {
    console.log(i);
}