import express from "express"

const router = express.Router()
router.get("/pedido", (req, res) => {
    const pedido = [
        { numero: 1, produto: "Fino de Jete", preco: 50 },
        { numero: 2, produto: "McPherson", preco: 24 },
        { numero: 3, produto: "Honeyhart", preco: 30 },
        { numero: 4, produto: "Pink Mammoth", preco: 25 },
        { numero: 5, produto: "Fino de Jete", preco: 50 },
    ];
    res.render("pedido", {
        pedido: pedido
    })
});

export default router;