// É uma forma de criar um objeto, tornado-o reutilizável e limpo

// Nomes de classes devem iniciar com a primeira letra maiúscula
class Carro {
    // Para criar os ATRIBUTOS da Classe deve-se utilizar o método "constructor"
    constructor(marca, modelo, ano){
        // this representa a instância (objeto)
        // O valor que for enviado a classe será atribuido a instância
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // MÉTODOS
    buzinar() {
        return "Beep! Beep!";
    }
};

// Criando INSTÂNCIAS (objetos) derivados da Classe Carro
// Objeto - Carro Popular
const carroPopular = new Carro("Fiat","UNO",2012);
document.write(
    `<p>O carro ${carroPopular.marca} é do ano de ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}</p>`
);

// Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;
document.write(
    `<p>O carro ${carroEsportivo.marca} é do ano de ${carroEsportivo.ano}. Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);

// Adicionando um novo atributo
carroEsportivo.corNeon = "Azul";

// Adicionar um novo método
carroEsportivo.turbo = () => {
    return "Vrummmmm! O carro está acelerando muito!!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possuí neo da cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)
