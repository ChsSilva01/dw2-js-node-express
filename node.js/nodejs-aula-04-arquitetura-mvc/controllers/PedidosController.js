import express from "express"

const router = express.Router()

// ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
    const pedidos = [
        { numero: 1, produto: "Notebook", preco: 3500 },
        { numero: 2, produto: "Smartphone", preco: 2500 },
        { numero: 3, produto: "Fone de ouvido", preco: 200 },
        { numero: 4, produto: "Monitor 24 polegadas", preco: 900 },
    ];
    res.render("pedidos", {
        pedidos: pedidos
    })
})

export default router;
