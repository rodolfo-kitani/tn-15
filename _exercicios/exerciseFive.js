/*
Exercício 5
Com o array de objetos de cidades descrito abaixo, precisamos extrair alguns relatórios:
const cidades = [{
"nome": "Salvador",
"estado": "BA",
"populacao": 30000
}, {
"nome": "São Paulo",
"estado": "SP",
"populacao": 10000
}, {
"nome": "Rio de Janeiro",
"estado": "RJ",
"populacao": 20000
}, {
"nome": "Curitiba",
"estado": "PR",
"populacao": 15000
}, {
"nome": "Porto Alagre",
"estado": "RS",
"populacao": 25000
}, {
"nome": "Porto Seguro",
"estado": "BA",
"populacao": 5000
},
{
"nome": "Santo André",
"estado": "SP",
"populacao": 8000
}, {
"nome": "Macaé",
"estado": "RJ",
"populacao": 3000
}]

a) Cria uma função que retorne apenas o(s) NOME(S) de todas as cidades, sendo filtradas por estado

function cidadesPorEstado(estado) {
  // escreva sua função aqui
}
cidadesPorEstado("SP") // retorna ["São Paulo", "Santo André"] 
b) Crie uma função que receba por parâmetro dois números, sendo eles população mínima e máxima. Retornando apenas o(s) NOMES de todas as cidades que estejam entre esses números

function cidadesPorIntervaloDePopulacao(populacao_minimo, populacao_maximo) {
  // escreva sua função aqui
}
cidadesPorIntervaloDePopulacao(1000, 9000) // retorna ["Macaé", "Santo André", "Porto Seguro"]  
c) Crie uma função que recebe por parâmetro o nome de uma cidade, e retorne uma string: 'Informativo de Salvador: cidade que fica na Bahia e possui 30000 habitantes'

function informativoCidade(cidade) {
  // escreva sua função aqui
}
informativoCidade('Macaé') // retorna 'Informativo de Macaé: cidade que fica no Rio de Janeiro e possui 3000 habitantes'
*/
