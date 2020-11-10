// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Produtos = sequelize.define("produtos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomeProduto: {
        allowNull: false,
        type: Sequelize.STRING(100),
        
        
    },
    preçoCusto: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
        
    },
    preçoVenda: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1,999999]
        }
        
    },
    quantidade: {
        allowNull: false,
        type: Sequelize.STRING(4)
        
    }
    
});
 
module.exports = Produtos;
