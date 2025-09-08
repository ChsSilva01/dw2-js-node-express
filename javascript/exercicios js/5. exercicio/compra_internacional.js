// 1
const dataAtual = new Date();
document.write(dataAtual);

// 2
const compraInternacional = 500.75;
const valorCompraUSD = compraInternacional.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD",
});
document.write(`<p>O valor da compra será ${valorCompraUSD}.</p>`);

// 3
const valorCompraBRL = compraInternacional.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
});
document.write(`<p>O valor da compra será ${valorCompraBRL}.</p>`);

// 4
const dia = dataAtual.getDate() + 12;
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();

if(((mes % 2) == 0) && mes != 12){
    if(dia > 30){
        const novodia = dia - 30;
        const novomes = mes + 1;
        document.write(`${novodia}/${novomes}/${ano}`);  
    } else {
        document.write(`${dia}/${mes}/${ano}`);
        
    }
} else if(((mes % 2) != 0) && mes != 12){
    if(dia > 31){
        const novodia = dia - 31;
        const novomes = mes + 1;   
        document.write(`${novodia}/${novomes}/${ano}`);
                   
    } else {
        document.write(`${dia}/${mes}/${ano}`);
    }
} else if(mes == 12){
    const novodia = dia - 31;
    const novomes = 1;  
    const novoano = ano + 1 
    document.write(`${novodia}/${novomes}/${novoano}`);
} else {
    document.write("Algo de inesperado ocorreu!!");
}