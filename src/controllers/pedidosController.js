// Define a utilização do model pedidos e a dependência http-status

const Pedidos = require('../models/pedidos');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const nomeProduto = req.body.nomeProduto;
    const quantidade = req.quantidade;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Pedidos.create({
        nome: nome,
        telefone: telefone,
        nomeProduto: nomeProduto,
        quantidade: quantidade,

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
 
exports.SelectAll = (req, res, next) => {
    Pedidos.findAll()
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Pedidos.findByPk(id)
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const nomeProduto = req.body.nomeProduto;
    const quantidade = req.body.quantidade;
 
    Pedidos.findByPk(id)
        .then(pedidos => {
            if (pedidos) {
                pedidos.update({
                    nome: nome,
                    telefone: telefone,
                    nomeProduto: nomeProduto,
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
 
    Pedidos.findByPk(id)
        .then(pedidos => {
            if (pedidos) {
                pedidos.destroy({
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
 
