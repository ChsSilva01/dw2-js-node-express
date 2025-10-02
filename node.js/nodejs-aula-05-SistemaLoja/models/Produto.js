// É no Model que criaremos a tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-conf.js"

// Definindo a estrutura da tabela
const Produto = connection.define('produto', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
// Sicronizado a tabela com o banco de dados
Produto.sync({force: false})
export default Produto;