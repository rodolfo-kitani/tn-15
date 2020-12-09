//Ideas to use in price action trading.

let openingPrice;
let closingPrice;
let timeFrame;

function hightOrLow (openingPrice, closingPrice) {
    if (openingPrice > closingPrice) {
        return "Candle de alta";
    }else if (openingPrice < closingPrice) {
        return "Candle de baixa";
    }else {
        return "Doji";
    }
}

console.log(hightOrLow(101500, 101780))

//Renan scalp patterns
//Aula Scalps I

//first
//Acima e aaixo de boas barras a favor.
//BBA ou BBF (contexto bom)
//boa barra a favor é uma barra fechando na máxima, corpo de > 80%

//Padrão de entrada:
//Compra 1 tick acima (compra) ou 1 tick abaixo (venda)
//ou entrada stop 1 tick acima do extremo do fechamento (máx ou mín)

//Dúvida, uma barra teria que ter uma variancia minima para ser boa não?
//Ex. ATR em 15 ticks, uma barra de 4 ticks de range fechando em 90% do range é boa?

//Obs 2. Não pode deixar muito pavio.
//Dúvida, diz do lado a favor? ou pavio do lado contra é ruim?
// em 02:25 ele não escolhe uma barra que fechou acima de 80% porque o corpo é peq.
// porque o pavio do lado contrário é grande.

//Obs 3. A entrada no sistema do Renan depende sempre de 2 fatores, a setup (padrão)
// e o contexto,

//ex de contexto por padrões gráficos:
//Fundo ou Topo Duplo, Cunha em Fundo ou Topo, e movimentos climáticos
//Esses sinais de contexto, ou padrões são utilizados para entender o que está acontecendo
//e reduzir a probabilidade do contrário não acontecer.

//Então uma boa barra fechando no extremo, maior a probabilidade do padrão acontecer
//se existem muitos motivos de contexto para isso acontecer.

//Obs 4. Filtro de não entrar a favor se a barra boa esta rompendo uma máxima,
//se isso acontecer esperamos o fechamento da continuidade, e entramos se ela for uma
//BB a favor que fechou alem do rompimento.

//Padrão de saida antecipada
//Se fechar barra ruim, sair com stop 1 tick abaixo dessa barra (compra).
//Isso é importante pois no padrão original os stops do Renan eram técnicos e longos.


//Padrão 2 (16:50)
//Rompimentos da Média de 20 : RM20

//Ao contrário dos rompimentos de suporte e resistencia eles são interessantes.

//Barra boa rompendo a média de 20, que fechou acima (alem) da média de 20

//Padrão de entrada:
//Compra acima da barra que fechou.

//Formas de sair
//1) barra ruim contra (ou ma BBA da ponta contrária), Renan sai 1 tick alem dessa barra.
//2) Se duas barras seguintes não atingirem seu alvo,
//saida a baixo da mín dessas barras

//Pq? Porque você espera que esse movimento tenha um pullback saudavel para continuar
//o movimento anterior, se o pullback (correção) for longo em preço ou tempo
//sair antes é melhor.

//Padrão 3 (23:00)
//Fade Inside
//É um xodo do Renan, não é tão frequente mas costumava ter uma probabilidade boa.
//Em 2020 o retorno desse padrão não foi bom, por isso ele esta encostado.

//Depois comentário sobre personalidade do trade e escolha entre scalp e alvo longo

//Aula Scalps II
//Padrão 4 (00:40)
//Falha de Retomada

//Primeiro você precisa de uma tendencia, uma pernada dominante.

//Você tem uma pernada dominante, no exemplo 1 ela inclusive formou cunha com 3 push
//e você tem um pb profundo, ele pode ser profundo por ter várias barras,
//por mover muito o preço, por retomar até a média, por formar micro canal
//e um pb profundo provavelmente vai ter uma segunda perna, ou seja
//a primeira tentativa de retomar a rendencia vai falhar.

//Entrada:
//Com ordem Limit, abaixo da ultima barra do pb, sendo que uma barra rompendo o MC
//ou uma barra de tentativa de retomada que vai ativar sua entrada.

//Saida:
//Saida antecipada, se fechar uma barra de continuidade para o
//lado que você entrou você move o stop 1 tick abaixo.

//