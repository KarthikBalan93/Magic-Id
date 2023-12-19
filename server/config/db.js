// const { Sequelize } = require('sequelize');
// const mssql = require('mssql');
// const userModel = require('../models/user');

// const sequelize = new Sequelize({
//   dialect: 'mssql',
//   dialectModule: mssql,
//   dialectOptions: {
//     options: {
//       encrypt: true, // For Azure SQL Database
//     },
//   },
//   host: process.env.DB_HOST,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// const db = {};
// db.User = userModel(sequelize);
// sequelize.sync({ alter: true });

// module.exports = db;


require('dotenv').config();
const sql = require('mssql');

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: 1433,
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

async function connect() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to the database.');
        return pool;
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
    }
}

async function executeQuery(query) {
    const pool = await connect();
    try {
        const result = await pool.request().query(query);
        return result.recordset;
    } catch (error) {
        throw error;
    } finally {
        if (pool) {
            console.log('Connection pool is closed')
            await pool.close();
        } 
    }
}

module.exports = {
    connect,
    executeQuery,
};




