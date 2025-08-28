listaClientes = [
    {
        nome: "Mariana Alves Costa",
        endereco: "Rua das Palmeiras, 123 - Centro, Curitiba/PR - CEP: 80010-150",
        cpf: 39142865702
    },
    {
        nome: "Ricardo Souza Menezes",
        endereco: "Avenida Brasil, 4500 - Jardim Paulista, São Paulo/SP - CEP: 01430-000",
        cpf: 81293615470   
    },
    {
        nome: "Fernanda Oliveira Martins",
        endereco: "Rua Bela Vista, 77 - Boa Viagem, Recife/PE - CEP: 51020-200",
        cpf: 25480973319   
    }
];

listaClientes.forEach(clientes => {
    document.write(`
        Nome: ${clientes.nome}<br>
        Endereço: ${clientes.endereco}<br>
        CPF: ${clientes.cpf}<br><br>`);
});

document.write("<hr>");

listaClientes.push({
    nome: "Lucas Henrique da Silva",
    endereco: "Rua Rio Branco, 890 - Centro, Belo Horizonte/MG - CEP: 30111-030",
    cpf: 54792031844
});

listaClientes.forEach(clientes => {
    document.write(`
        Nome: ${clientes.nome}<br>
        Endereço: ${clientes.endereco}<br>
        CPF: ${clientes.cpf}<br><br>`);
});

document.write("<hr>");

listaClientes.unshift({
    nome: "Camila Santos Ferreira",
    endereco: "Avenida Atlântica, 2200 - Copacabana, Rio de Janeiro/RJ - CEP: 22021-001",
    cpf: 67340582109
});

listaClientes.forEach(clientes => {
    document.write(`
        Nome: ${clientes.nome}<br>
        Endereço: ${clientes.endereco}<br>
        CPF: ${clientes.cpf}<br><br>`);
});