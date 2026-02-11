# 🧮 Cálculo de Preço Final — E-commerce

Projeto desenvolvido como exercício prático de **JavaScript básico**, com foco em **lógica aplicada**, **funções puras** e **regras de negócio comuns em sistemas de e-commerce**.

O objetivo do projeto não é UI avançada ou uso de frameworks, mas sim demonstrar **raciocínio lógico**, **organização de código** e **leitura correta de requisitos**.

---

## 🎯 Objetivo do Projeto

Simular o cálculo do **preço final de um produto em um e-commerce**, aplicando:

- Subtotal por quantidade  
- Imposto fixo  
- Desconto progressivo por quantidade  
- Regra de frete grátis  
- Total final detalhado **passo a passo**

---

## 🧠 Regras de Negócio

- **Imposto:** 17% sobre o subtotal  
- **Desconto por quantidade:**
  - 1–2 unidades → sem desconto
  - 3–5 unidades → 5%
  - 6 ou mais → 10%
- **Frete:**
  - Gratuito para compras acima de **R$ 200,00** (após desconto)
  - Caso contrário: **R$ 15,00**

---

## 🛠 Tecnologias Utilizadas

- **HTML5** — estrutura semântica  
- **CSS3** — estilização básica e layout responsivo  
- **JavaScript (Vanilla)** — lógica, cálculos e regras de negócio  
- **Sem bibliotecas externas**

---

## 📁 Estrutura do Projeto

projeto/
├── index.html
├── style.css
└── script.js


---

## ⚙️ Destaques Técnicos

- Uso de `const` para valores fixos (imposto, descontos, frete)  
- Uso de `let` apenas quando necessário  
- Implementação de **funções puras**, como:
  - `calcularSubTotal`
  - `calcularImposto`
  - `calcularDesconto`
  - `calcularFrete`
  - `calcularValorTotal`
- **Sem uso de frameworks**
- Lógica isolada da interface
- Impressão no **console** do passo a passo do cálculo:
  - Subtotal
  - Imposto aplicado
  - Desconto calculado
  - Frete
  - Valor final

> A interface visual é apenas informativa. O foco do exercício é a lógica.

---

## 🤖 Uso de IA no Projeto

- **HTML e CSS**: gerados inicialmente com apoio de IA para acelerar a produtividade  
- **JavaScript**: desenvolvido manualmente por mim  
- **Revisão final**: HTML revisado e CSS ajustado para garantir organização, clareza e aderência aos requisitos  

A IA foi utilizada como **ferramenta de apoio**, não como substituição do aprendizado.

---

## 🎓 Contexto Educacional

Projeto desenvolvido como parte do estudo de **JavaScript básico**, com ênfase em:

- Lógica aplicada
- Funções puras
- Leitura e interpretação de requisitos
- Boas práticas iniciais de organização de código

---

## ▶️ Como Executar

1. Clone o repositório  
2. Abra o arquivo `index.html` no navegador  
3. Insira o preço base e a quantidade  
4. Abra o **console do navegador** para acompanhar o cálculo passo a passo
