import express from "express"

const router = express.Router()

router.get("/perfil", (req, res) => {
    res.render("perfil");
});

export default router;