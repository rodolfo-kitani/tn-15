/*
Exercício 4:
Crie uma função que receba por parâmetro um número e calcule o seu fatorial Fatorial: O fatorial de um número natural n, representado por n!, é a multiplicação de todos os inteiros positivos menores ou iguais a n
Exemplo: n = 6 então para calcular o fatorial do número 6 é 6x5x4x3x2x1 = 720

O valor a ser retornado é 720

function calculaFatorial(numero) {
  // escreva sua função aqui
}
calculaFatorial(6) //retorna 720
*/

function calculaFatorial(number) {
    let output = number;
    for (i = 1; i < number; i++) {
        output = output * i;
        console.log(number + " " + i + " " + output)
    }
    return output;
}

console.log(calculaFatorial(6))