const { Sequelize } = require('sequelize');

const config = {
    development: {
        username: 'root',
        password: '08092003',
        database: 'crud',
        host: 'localhost',
        dialect: 'mysql',
    },
    production: {},
};

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

module.exports = sequelize;