//6 Kyu exercise - Your order, please

/*
Your task is to sort a given string. Each word in the string will contain
a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input
String will only contain valid consecutive numbers.
*/

//example

/*
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

/*
function order(words){
  // ...
}
*/

function order(words){
  //checa qual o número da sring, separa ele e
  //coloca ele em uma array na posição numero + 1

  //posso checar com typeof

    //if words[i] === "int"
    let array = [];
    for (let i = 0; i < words.length; i++){
        if (isNaN(words[i])) {
            
            array = array[i]
        }
    }
    return array;
}

let wordOne = 2;
let wordTwo = "Thi1s";

console.log(typeof(wordOne));
console.log(parseInt("is2", 10));
console.log(isNaN(4));

console.log(order("is2"))