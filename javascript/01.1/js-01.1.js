// VARIÁVEIS PODEM SER DECLA%RADAS DE 3 FORMAS:
// VAR, LET e CONST

// VAR: No geral evite o seu uso, pode não ser muito seguro (Pode ser sobrescrita o que pode gerar conflito).

// LET: Utilize quando for necessário ATRIBUIR o valor da variável. EX:
// let nome
// nome = "Pedro"

// CONST: Utilize quando NÃO precisar reatribuir o valor da variável. EX:
// const nome = "Pedro"

// var nome = "Diego"
// var nome = "Maria"

// let cidade = "Registro"
// let cidade = "Pariquera" // NÃO PODE
// let endereco
// endereco = "Rua Tal"

// const idade // NÃO PODE
// const idade = 18
// idade = 20 // NÃO PODE

// TIPOS DE FUNÇÕES

// FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem-Vindo! Essa é sua primeira função!</h2>";

function showMessage() {
  document.write(message);
}
// Invocando a função
showMessage();

// FUNÇÃO COM PARÃMETRO:
const user = "Carlos Henrique";

function userMessage(user) {
  // Essa função recebe um parâmetro
  document.write(`<h3> O que deseja fazer hoje, ${user} ? </h3>`);

  // ${} -> Template String / Literal Strings
  // É usado para inserir variáveis dentro de STRINGS (aspas)
}

userMessage(user);
