const Sequelize = require('sequelize');
const seq = new Sequelize('sqlite::users.db', {
    // logging:console.log,
    // logging: (...msg)=> console.log(msg),
    // logging: false,
    // logging: msg => logger.debug(msg),
    // logging: logger.debug.bind(logger)
    dialect: 'sqlite',
    storage: './data.db',
    define: {
        timestamps: true,
    }
});

module.exports = seq;

