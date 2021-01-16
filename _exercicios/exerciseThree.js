// Exercise 3

/*

    Crie uma função que receba por parâmetro uma string
    e a retorne revertido

Exemplo: roma - O valor a ser retornado deve ser: amor

function inverterPalavra(palavra) {
  // escreva sua função aqui
}
inverterPalavra('roma') //retorna amor 
*/

function wordInverter(string){
    let invertedWord = "";
    for (let i = string.length; i >= 0; i--) {
        invertedWord = invertedWord + string[i]
    }
    return invertedWord;
}

let test = "roma";

wordInverter(test);

console.log(wordInverter(test));