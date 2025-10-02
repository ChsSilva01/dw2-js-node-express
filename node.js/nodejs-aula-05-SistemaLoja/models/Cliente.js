// É no Model que criaremos a tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-conf.js"

// Definindo a estrutura da tabela
const Cliente = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
// Sicronizado a tabela com o banco de dados
Cliente.sync({force: false})
export default Cliente;