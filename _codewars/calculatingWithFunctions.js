/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/
//numbers
/*
function zero() {}      // 0
function one() {}       // 1
function two() {}       // 2
function three() {}     // 3
function four() {}      // 4
function five() {}      // 5
function six() {}       // 6
//function seven() {}     // 7
function eight() {}     // 8
function nine() {}      // 9

//operations
//function plus() {}      // +
function minus() {}     // -
function times() {}     // *
function dividedBy() {} // /

//
*/

let seven = 
    operation =>
        number =>
            operation (7, number);

let one = 
    operation =>
        number =>
            operation (1, number);

let plus = (a, b) => a * b;

//let conta = seven(plus(oneOne()));
console.log(`Número: ${seven()}`)
console.log(`Operação: ${plus()}`)
console.log(`Número2: ${one()}`)
console.log(`Resultado: ${conta}`)
console.log(`${seven()} ${plus()} ${one()} = ${conta}`)