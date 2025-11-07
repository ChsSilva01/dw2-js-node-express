import express from "express";
const app = express();
import connection from "./config/sequelize-config.js" 

import PerfilController from "./controllers/PerfilController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"

import Produto from "./models/produto.js";

connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

connection.query(`CREATE DATABASE IF NOT EXISTS lojachirimoya;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})
Promise.all([
    Produto.sync({force: false}), 
]).then(() => {
    console.log("Tabelas e relacionamentos criados com sucesso!");
}).catch(error => {
    console.log("Erro na criação das tabelas: ", error);    
})

app.set('view engine','ejs');
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/",PerfilController);
app.use("/",PedidosController);
app.use("/",ProdutosController);

app.get("/", (req, res) => {
    res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
    if (error){
        console.log(`Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`);
    } else {
        console.log(`Servidor inciado com sucesso em: http://localhost:${port}`);
    }
});