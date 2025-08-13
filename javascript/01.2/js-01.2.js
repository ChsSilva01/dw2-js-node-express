// FUNÇÃO ANÔNIMA
// function (n1, n2){
//     return n1 + n2;
// }

const soma = function (n1,n2){
    return n1 + n2;
};
document.write(`<p>O resultado da soma é: ${soma(8,7)}</p>`);
const tipo = typeof(soma);
document.write(`${tipo}`);

// ARROW FUNCTION (função anônima)
const dobro = x =>{
    return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}.</p>`);

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1,operador,num2) => {
    return eval(`${num1} ${operador} ${num2}`);
};
// eval no javascript nativa que realiza cálculos números a partir de dois nímeros e um operador
document.write(`<p>O resultado da operação é ${calc(1110, "-", 1)}</p>`);

// SIMPLIFICANDO ARROW FUNCTION com um unico retorno
const calculadora = (num1,operador,num2) => 
    eval(`${num1} ${operador} ${num2}`)
// eval no javascript nativa que realiza cálculos números a partir de dois nímeros e um operador
document.write(`<p>O resultado da operação é ${calculadora(1110, "+", 1)}</p>`);

// IIFE - Função imediata (Immediately Invoked Function Expression)
const life = (function (){
    document.write("<p>Estou sendo executado imediatamente</p>");
})();

// IIFE COM PARÂMETRO
const loadUser = (function(user){
   document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`
   ); 
})("Carlos");