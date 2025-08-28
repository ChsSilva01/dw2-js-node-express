class Herois{
    constructor(nome,vida,velocidade,forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr(){
        return "O herói está correndo"
    }
    andar(){
        return "O herói está andando"
    }
    atacar(){
        return "O herói está atacando"
    }
    defender(){
        return "O herói está se defedendo"
    }
};

const HomemAranha = new Herois("Peter Park","100","150","100");
const Superman = new Herois("Clark Kent","1000","1000","1000");
const Batman = new Herois("Batman","100","50","50");

HomemAranha.teia = 1;
HomemAranha.sentidoAranha = () => {
    return "Foi detectado perigo ☠️☠️";
};

Superman.podeVoar = 0;
Superman.visaoCalor = () => {
    return "Soltando raio de calor ☀️☀️";
};

Batman.enconder = 1;
Batman.investigar = () => {
    return "Investigando... 🔍🔍"
};

document.write(`${Batman.correr()}<br>${Superman.nome}<br>${HomemAranha.sentidoAranha()}`);