// MANIPULAÇÃO DE DATAS
document.write("<h3>Manipulando datas:</h3>");

// Criar uma instância da classe Date() do Javascript
const dataAtual = new Date();
document.write(dataAtual);

// Pegando o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia} </p>`);

// Pegando o mês atual:
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês: ${mes} </p>`);

// Pegando o ano atual:
const ano = dataAtual.getFullYear();
document.write(`<p>Ano atual: ${ano} </p>`);

// Pegando o dia da semana:
const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaSemana} </p>`);

// Adicionando Dias, Mêses e Anos à data atual
// Adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

// Adicionando mêses
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);

// FORMATAÇÃO DE MOEDAS
// REAL
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`);

// DOLAR
const salarioDolar = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioDolar}.</p>`);

const salarioConvertido = salario * 0.176;
document.write(`<p>O valor do salário mínimo atual é ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD"
})}.</p>`);
// currency : EUR -> Euro

// FORMATAÇÃO DE STRING (textos)
document.write("<h3>Formatação de Strings:</h3>");
const nome = "Carlos Henrique";

// ALTERNANDO PARA LETRAS MAIÚSCULAS - toUpperCase()
document.write(`<p>Nome em maiúsca: ${nome.toUpperCase()}</p>`);

// ALTERNANDO PARA LETRAS MINÚSCULAS - toLowerCase()
document.write(`<p>Nome em maiúsca: ${nome.toLowerCase()}</p>`);

// REMOVENDO ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g, "");

// CONTANDO CARACTERES DE UMA STRING - .length
document.write(`</p>Esse nome tem: ${novoNome.length} letras</p>`)

