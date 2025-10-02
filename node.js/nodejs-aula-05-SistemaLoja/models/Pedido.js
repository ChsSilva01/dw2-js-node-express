// É no Model que criaremos a tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-conf.js"

// Definindo a estrutura da tabela
const Pedido = connection.define('pedido', {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
})
// Sicronizado a tabela com o banco de dados
Pedido.sync({force: false})
export default Pedido;