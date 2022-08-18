const Sequelize = require('sequelize');
const seq = require('../data/dbconf');

const User = seq.define('User',{
    id :{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    uname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    } 
},{
    freezeTableName: true,
    tableName: 'Users'
});




module.exports = User;