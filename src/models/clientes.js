// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Clientes = sequelize.define("clientes", {
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
    endereço: {
        allowNull: false,
        type: Sequelize.STRING(100),
        
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(20),
        
    },
    
});
 
module.exports = Clientes;
