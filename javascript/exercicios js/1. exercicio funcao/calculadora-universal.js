// 1.
const nome = "Carlos";
function saudacaoPersonalizada(nome){
    document.write(`<p>Olá, ${nome}! Bem-vindo(a) à Calculadora Universal!</p>`);
}

saudacaoPersonalizada(nome);

// 2.
function operacaoMatematica(num1, operador, num2){
    resultado = eval(`${num1} ${operador} ${num2}`);
    document.write(`<p>O resultado da operação de ${num1} ${operador} ${num2} é igual a <strong>${resultado}</strong></p>`);
}

operacaoMatematica(10,"+",5);

// 3.
const calcularDobro = function(numeroDobro){
    return 2 * numeroDobro;
}
document.write(`<p>O dobro do número é: <strong>${calcularDobro(10)}</strong></p>`);

// 4. 
const calcularMetade = numeroMetade => {
    return numeroMetade / 2;
}
document.write(`<p>A metade do número é: <strong>${calcularMetade(10)}</strong></p>`);

// 5.
const mensagem = function(){
    document.write("<p>Calculadora Universal pronta para uso!</p>");
}();