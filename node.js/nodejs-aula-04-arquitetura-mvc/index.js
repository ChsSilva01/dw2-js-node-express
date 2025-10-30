// Importando o Express (framework)
import express from "express"; // ES6 Módules

// Iniciando o Express na variável "app"
const app = express();

// Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"

// CONFIGURANDO O EJS
app.set('view engine','ejs');
// Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));
// Definindo a pasta PUBLIC para Arquivos Estáticos
app.use("/",ClientesController);
app.use("/",PedidosController);
app.use("/",ProdutosController);
// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a REQUISIÇÃO / RES = Trata a RESPOSTA
app.get("/", (req, res) => {
    res.render("index");
});


// ROTA DE PERFIL
// :user -> É um parâmetro da rota (OBRIGATÓRIO)
// :user? -> É um parâmetro da rota (OPCIONAL)
app.get("/perfil/:user", (req, res) => {
    // Criando a variável que será enviada para a página
    const user = req.params.user
    res.render("perfil",{
        // Enviando variáveis para a página EJS (HTML)
        user : user
    })
})



// Iniciando o Servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
    if (error){
        console.log(`Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`);
    } else {
        console.log(`Servidor inciado com sucesso em: http://localhost:${port}`);
    }
});

// NPM - instala as coisa
// NPX - executa
