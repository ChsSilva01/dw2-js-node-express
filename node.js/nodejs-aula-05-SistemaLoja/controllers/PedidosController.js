import express from 'express'
import Pedido from '../models/Pedido.js';
const router = express.Router()

// ROTA PEDIDOS
router.get("/pedidos", function (req,res){
        // SELECT * FROM CLIENTES
        Pedido.findAll().then((pedidos) => {
        res.render("pedidos", {
            pedidos: pedidos,
        });
    });
})

export default router
/*
{numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
*/