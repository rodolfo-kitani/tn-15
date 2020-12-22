/*
https://github.com/rafaelsanzio/dh-exercicios/blob/main/README.md
Exercício 01:
    Crie uma função que recebe por parâmetro uma string e retorne um boolean (true|false)
    se esse valor for palíndromo
        Palíndromo: Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades
        que tenha a propriedade de poder ser lida tanto da direita para a esquerda como
        da esquerda para a direita

    Exemplos: arara, osso, radar
    
    function palindromo(palavra) {
      // escreva sua função aqui
    }
    palindromo('arara') //retorna true
    palindromo('aula')  //retorna false
*/


function palindromeCheck(string) {
    //reverIndex is the reverse of i
    let reverseIndex = string.length - 1

    for (let i = 0; i < string.length; i++) {
    // Line 26 is used as a console log of every interation of i and reverseIndex.
    //    console.log(`Check ${i}: ${string[i]} - ${reverseIndex}: ${string[reverseIndex]}`)
    //The if will test if the string has the same letters starting from left and from right
          if (string[i] !== string[reverseIndex]) {
            return false;
        }
        reverseIndex--;
    }
    return true;
}