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


function palindromeCheck(string) = {
    //let isPalindrome;
    let stringLength = string.length
    for (let i = 0; i < stringLength; i++) {
        console.log(`Check ${i}: ${i} - ${stringLength}`)
        if (string[i] !== string[stringLength]) {
            return false;
        }
        stringLength--;
    }
    return true;
}

let teste = palindromeCheck("arara")

console.log(teste);