/*TAREFA FINAL DO MÓDULO:
Crie um sistema de cálculo de preço final para um e-commerce com as seguintes regras:

Requisitos:
O produto tem um preço base (ex: R$ 100,00)
Há um imposto fixo de 17% sobre o preço base
Desconto progressivo por quantidade:
1-2 unidades: 0% de desconto
3-5 unidades: 5% de desconto sobre o subtotal
6+ unidades: 10% de desconto sobre o subtotal
Frete gratuito para compras acima de R$ 200,00 (após descontos)
Frete padrão: R$ 15,00

Especificações Técnicas:
Use const para valores fixos (imposto, regras de desconto, frete)
Use let para valores que mudam (quantidade, preço final)
Crie pelo menos 3 funções puras:
calcularSubtotal(precoBase, quantidade)
calcularDesconto(subtotal, quantidade)
calcularFrete(subtotalComDesconto)
Use operadores aritméticos e de comparação
Use console.log() para mostrar cada etapa
Use pelo menos uma operação com || ou &&

Cenário de Teste:
Produto: R$ 89,90
Quantidade: 4 unidades
Calcule passo a passo o valor final
Formato de Saída Esperado (exemplo):
text

=== CÁLCULO DE PREÇO FINAL ===
Preço base: R$ 89.90
Quantidade: 4
Subtotal: R$ 359.60
Imposto (17%): R$ 61.13
Desconto (5%): R$ 17.98
Subtotal com desconto: R$ 341.62
Frete: R$ 15.00
TOTAL FINAL: R$ 356.62
Restrições:
NÃO use arrays ou objetos
NÃO use loops (ainda não vimos)
NÃO manipule a tela/DOM
Foque em funções puras e variáveis simples

Dica Importante:
Comece declarando TODAS as constantes no início:
javascript
const IMPOSTO = 0.17;
const FRETE_PADRAO = 15.00;
const LIMITE_FRETE_GRATIS = 200.00;
// ...etc
PARA ENTREGAR:
Escreva o código JavaScript completo que resolve este problema. Não preciso do HTML, apenas o código dentro da tag <script>.
*/
let precoBase= 89.90;
let unidade = 4;
function calcularSubTotal(precoBase, unidade){
    return precoBase*unidade
}
let subtotal = calcularSubTotal(precoBase, unidade);
console.log(subtotal);

const imposto = 0.17;
function calcularImposto(subtotal, imposto){
    return subtotal*imposto
}
let impostoCalculado = calcularImposto(subtotal, imposto);
console.log(impostoCalculado);

const desconto6Unidade= 0.10;
const desconto3Unidade= 0.05;
function calcularDesconto(subtotal, unidade, desconto3Unidade, desconto6Unidade){
    if(unidade >= 6){
        let desconto= subtotal*desconto6Unidade
        console.log(desconto)
        return subtotal- desconto
    }
    else{
        if(unidade >= 3){
            let desconto = subtotal*desconto3Unidade
            console.log(desconto)
            return subtotal- desconto
        }
        else{
            return subtotal
        }
    }
}
let precoTotal = calcularDesconto(subtotal, unidade, desconto3Unidade, desconto6Unidade);
console.log(precoTotal);

const freteGratis= 200;
function calcularFrete(precoTotal, freteGratis ){
    if(precoTotal >= freteGratis){
        return 0
    }
    else{
        return 15
    }
}
const frete = calcularFrete(precoTotal, freteGratis );
console.log(frete);

function calcularValorTotal(frete, precoTotal){
    return frete + precoTotal
}
const valorTotal = calcularValorTotal(frete, precoTotal);
console.log(valorTotal);