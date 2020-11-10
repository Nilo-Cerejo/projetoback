// Define a utilização do model usuario e a dependência http-status
const Produtos = require('../models/produtos');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nomeProduto = req.body.nomeProduto;
    const preçoCusto = req.body.preçoCusto;
    const preçoVenda = req.body.preçoVenda;
    const quantidade = req.body.quantidade;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Produtos.create({
        nomeProduto: nomeProduto,
        preçoCusto: preçoCusto,
        preçoVenda: preçoVenda,
        quantidade: quantidade,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
 
exports.SelectAll = (req, res, next) => {
    Produtos.findAll()
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Produtos.findByPk(id)
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nomeProduto = req.body.nomeProduto;
    const preçoCusto = req.body.preçoCusto;
    const preçoVenda = req.body.preçoVenda;
    const quantidade = req.body.quantidade;
 
    Produtos.findByPk(id)
        .then(produtos => {
            if (produtos) {
                produtos.update({
                    nomeProduto: nomeProduto,
                    preçoCusto: preçoCusto,
                    preçoVenda: preçoVenda,
                    quantidade: quantidade
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const id = req.params.id;
 
    Produtos.findByPk(id)
        .then(produtos => {
            if (produtos) {
                produtos.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
