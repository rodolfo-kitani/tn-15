//6 Kyu exercise of www.codewars.com

//Create Phone Number

/*
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.
*/

/*
Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

/*
function createPhoneNumber(numbers){
  
}
*/

//first try

/*
function createPhoneNumber(numbers){
  return phoneNumber = "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/
//more sofisticated try

function createPhoneNumber(numbers){
    let phoneNumber = "";
    for (let num of numbers) {
        phoneNumber += num;
    }
    function formatPhoneNumber(phoneNumber){ // transform a array or a number in a phoneNumber formated string.
        let out = "";
        for (let i = 0; i < phoneNumber.length; i++) {
            if( i === 0 ) { // add the first (
                out += "(";
                out += phoneNumber[i];
            }
            else if ( i === 2 ) { // add the secound (
                out += phoneNumber[i];
                out += ") ";
            }
            else if ( i === 5) { // add the "-" to separate the last 3 numbers
                out += phoneNumber[i];
                out += "-";
            } else {
                out += phoneNumber[i];
            }
        }
        return out;
    }
    return formatPhoneNumber(phoneNumber);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
