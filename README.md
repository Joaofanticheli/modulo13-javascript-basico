📦 Cálculo de Preço Final — E-commerce

Projeto desenvolvido como exercício prático de JavaScript básico, com foco em lógica, funções puras e regras de negócio comuns em sistemas de e-commerce.

A interface foi inicialmente gerada com apoio de IA, enquanto toda a lógica em JavaScript foi implementada manualmente por mim.
Após isso, revisei o HTML e ajustei o CSS para manter organização, clareza e aderência aos requisitos do exercício.

🎯 Objetivo do Projeto
Simular o cálculo de preço final de um produto em um e-commerce, aplicando:
Subtotal por quantidade
Imposto fixo
Desconto progressivo
Regra de frete grátis
Total final detalhado passo a passo
O foco não é framework ou UI avançada, mas sim raciocínio lógico, organização de código e funções puras.

🧠 Regras de Negócio
Imposto: 17% sobre o subtotal
Desconto por quantidade:
1–2 unidades → sem desconto
3–5 unidades → 5%
6 ou mais → 10%
Frete:
Gratuito para compras acima de R$ 200,00 (após desconto)
Caso contrário, R$ 15,00

🛠️ Tecnologias Utilizadas
HTML5 — estrutura semântica
CSS3 — estilização e layout responsivo
JavaScript (Vanilla) — lógica e cálculos
Sem bibliotecas externas.

🧩 Estrutura do Projeto
📁 projeto
├── index.html
├── style.css
└── script.js

⚙️ Destaques Técnicos
Uso de const para valores fixos (imposto, descontos, frete)
Uso de let apenas quando necessário
Implementação de funções puras, como:
calcularSubTotal
calcularImposto
calcularDesconto
calcularFrete
calcularValorTotal
Sem uso de:
Arrays
Objetos
Loops
Manipulação avançada do DOM
👉 As etapas do cálculo são exibidas via console.log, conforme exigido no exercício.
📤 Saída do Sistema
O sistema imprime no console o passo a passo do cálculo, incluindo:
Subtotal
Imposto aplicado
Desconto calculado
Frete
Valor final
A interface também contém um campo visual apenas para exibição informativa.

🤖 Uso de IA no Projeto
HTML e CSS: gerados com apoio de IA para acelerar a produtividade
JavaScript: desenvolvido manualmente
Revisão final: HTML revisado e CSS ajustado por mim para organização, clareza e aderência ao exercício
A IA foi utilizada como ferramenta de apoio, não como substituição do aprendizado.

📚 Contexto Educacional
Projeto desenvolvido como parte do estudo de JavaScript básico, com ênfase em:
Lógica aplicada
Funções puras
Leitura e interpretação de requisitos
Boas práticas iniciais de organização de código

🚀 Como Executar
Clone o repositório
Abra o arquivo index.html no navegador
Insira o preço base e a quantidade
Abra o console do navegador para ver o passo a passo dos cálculos
