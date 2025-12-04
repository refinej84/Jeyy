# 🧪 Testes Cypress --- Página de Cadastro Fireleaf

Este documento descreve os testes automatizados criados com **Cypress**
para validar o comportamento da **página de cadastro da aplicação
Fireleaf**. Os testes garantem que o formulário funcione corretamente,
exibindo validações, mensagens e redirecionamentos esperados.

------------------------------------------------------------------------

## 📌 Objetivo dos Testes

Os testes foram desenvolvidos para assegurar que: - Todos os elementos
essenciais do formulário estão presentes. - O usuário não consiga enviar
dados incompletos. - O cadastro funcione corretamente quando os dados
forem válidos. - Erros sejam exibidos quando as senhas forem
incompatíveis. - O link para a página de login esteja configurado
corretamente.

------------------------------------------------------------------------

## 🏗️ Estrutura Geral

Todos os testes estão agrupados dentro do bloco:

``` js
describe("Página de Cadastro - Fireleaf", () => { ... })
```

E antes de cada teste, a página é carregada com:

``` js
beforeEach(() => {
  cy.visit('http://127.0.0.1:3000/Untitled-1%20(1).html');
});
```

Isso garante que cada teste inicia em um estado limpo.

------------------------------------------------------------------------

## ✔️ Testes Realizados

### 1. **Carregamento dos elementos do formulário**

**O que é testado:** - Verificar se todos os campos e botões aparecem
corretamente na página.

**Campos verificados:** - Nome - Email - Data de nascimento - Senha -
Confirmar senha - Link para login - Botão "Cadastrar"

Esse teste garante que a estrutura mínima do formulário existe.

------------------------------------------------------------------------

### 2. **Validação de campos vazios**

**O que é testado:** - Quando o usuário tenta enviar o formulário sem
preencher nada.

**Comportamento esperado:** - Todos os campos devem ser marcados como
inválidos (`:invalid`).

Isso confirma que o HTML5 está aplicando validações obrigatórias.

------------------------------------------------------------------------

### 3. **Preenchimento correto do formulário**

**O que é testado:** - Submissão de dados válidos. - Exibição da
mensagem de sucesso.

**Mensagem esperada:**

    Cadastro realizado com sucesso

Esse teste simula um usuário real interagindo corretamente com todos os
campos.

------------------------------------------------------------------------

### 4. **Erro ao inserir senhas diferentes**

**O que é testado:** - O comportamento ao enviar o formulário com senha
e confirmação diferentes.

**Mensagem esperada:**

    As senhas não coincidem

Assim garantimos que a validação de confirmação de senha está
funcionando.

------------------------------------------------------------------------

### 5. **Link para a página de login**

**O que é testado:** - Verificar se o link "Já tem conta? Faça login"
leva para a página correta.

**Atributo esperado:**

``` html
href="login1.html"
```

Esse teste certifica que o fluxo de navegação está correto.

------------------------------------------------------------------------

## 🧩 Recursos Utilizados

-   **Cypress 12+**
-   Validadores HTML5 (`:invalid`)
-   Ações do Cypress: `.type()`, `.click()`, `.contains()`, `.should()`
-   Escuta de alertas com `cy.on("window:alert")`

------------------------------------------------------------------------

## 📄 Conclusão

Os testes implementados cobrem as principais funcionalidades críticas da
página de cadastro. Eles asseguram: - Usabilidade - Navegação correta -
Validações essenciais - Integridade do fluxo de cadastro

Esses testes fornecem uma base sólida para manutenção futura e ajudam a
prevenir regressões na interface.

------------------------------------------------------------------------

Caso queira que eu gere **mais testes**, adicione **prints da página**,
crie **documentação profissional**, ou gere **pipeline CI/CD**, posso
fazer isso também! 🚀
