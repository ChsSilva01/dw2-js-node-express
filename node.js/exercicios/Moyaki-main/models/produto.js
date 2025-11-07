import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define("produtos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default Produto;
