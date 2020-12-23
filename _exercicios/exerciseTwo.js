//Exercise 02
/*

    Crie uma função que recebe por parâmetro um array de números,
    e encontre o número que não faz parte daquela sequência.

Exemplo: [1, 2, 3, 4, 5, 6, 20, 7, 8, 9] - O número 20 não está na sequência

function foraDaSequencia(arrayDeNumeros) {
  // escreva sua função aqui
}
foraDaSequencia([1, 2, 3, 4, 5, 6, 20, 7, 8, 9]) //retorna 20
*/

function outOfSequence(array) {
    //This will check if the next position of the array is a sequence of the current one.
    for (let i = 0; i < array.length; i++) {
      if(array[i]+1 !== array[i+1]) {
        return array[i+1]; // return the number that is out of the sequence
      }
    }
    return false;
}

let test = outOfSequence([1, 2, 3, 4, 5, 6, 20, 7, 8, 9]);

console.log(test);
