import express from "express";
const router = express.Router();

// ROTA de LOGIN
router.get("/login", (req, res) => {
    res.render("login");
});

// ROTA de CADASTRO
router.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

export default router;