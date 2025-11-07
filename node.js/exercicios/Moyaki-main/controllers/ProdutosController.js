// Importando o Express
import express from "express"
import Produto from "../models/produto.js"

// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

router.get("/produtos", (req, res) => {
    Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.get("/produtoCadas", (req, res) => {
    res.render("produtoCadas");
});

router.get("/produtoEdit", (req, res) => {
    res.render("produtoEdit");
});

router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id;
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createProdutos", (req, res) => {
    const nome = req.body.nome
    const foto = req.body.foto

    const precoString = req.body.preco.replace(",", "."); 
    const preco = parseFloat(precoString); 

    Produto.create({
            nome: nome,
            foto: foto,
            preco: preco,
    }).then(() => {
        res.redirect("/produtos")
    }).catch(err => {
        console.log(err);
    });

});

router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id).then(function (produto) {
    res.render("produtoEdit", {
      produto: produto,
    });
  }).catch((err) => {
    console.log(err);
  });
});

// ROTA DE ALTERAÇÃO DE CLIENTES
router.post("/produtos/update/:id", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const foto = req.body.foto;
  const preco = req.body.preco;
  Produto.update(
    {
      nome: nome,
      foto: foto,
      preco: preco,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/produtos");
  }).catch((err) => {
    console.log(err);
  });
});


// Exportando o objeto router
export default router;