import express from "express";
const router = express.Router();
// Importando o Model de Clientes
import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  // SELECT * FROM CLIENTES
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

export default router;

/*
{ nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis" },
    { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
    { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
    { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
*/