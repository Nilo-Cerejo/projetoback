// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Pedidos = sequelize.define("pedidos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        
        
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(20),
        
    },
    nomeProduto: {
        allowNull: false,
        type: Sequelize.STRING(100),       
    },
    quantidade: {
        allowNull: true,
        type: Sequelize.INTEGER
        
    },
    
});
 
module.exports = Pedidos;
