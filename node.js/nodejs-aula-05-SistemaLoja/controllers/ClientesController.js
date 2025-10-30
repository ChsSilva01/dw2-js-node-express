import express from "express";
const router = express.Router();
// Importando o Model de Clientes
import Cliente from "../models/Cliente.js"

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // SELECT * FROM CLIENTES
  // then => Promessa bem suscedida
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
    // catch => Falha na resolução da promessa
  }).catch(error => {
    console.log(error)
  });
});



// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new",(req,re) => {
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco

  Cliente.create({
    // coluna : dado do form
    nome: nome,
    cpf: cpf,
    endereco: endereco
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

// ROTA DE EXCLUSÃO DE CLIENTE
router.get("/clientes/delete/:id", (req, red) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  Cliente.destroy({
    where:{
      id: id,
    }
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  })
})

// ROTA DE EDIÇÃO DE CLIENTE
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id
  // Buscando o cliente pela ID
  // findByPk() -> busca um registro pela chave primária (id)
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente : cliente
    });
  });
});

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/clientes/update", (req, res) => {
  // Coletqando dados do formulário
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.update({
    nome : nome,
    cpf : cpf,
    endereco : endereco
  },
  { where : {id : id}}
  ).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error)
  })
})

export default router;












/* 
{
      nome: "Ana Silva",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
    },
    {
      nome: "Pedro Almeida",
      cpf: "987.654.321-00",
      endereco:
        "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
    },
    {
      nome: "Marina Oliveira",
      cpf: "456.789.123-00",
      endereco:
        "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
    },
    {
      nome: "Rafael Santos",
      cpf: "321.654.987-00",
      endereco:
        "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
    },
*/