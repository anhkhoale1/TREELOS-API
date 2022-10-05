const express = require('express');
const app = express();
const db = require('./connectdb');

function route(app) {
  let create_db = 'CREATE DATABASE `treelos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci';
  let create_users = 'CREATE TABLE users(name VARCHAR(255), login VARCHAR(80), password VARCHAR(80), mail VARCHAR(80), id INT PRIMARY KEY NOT NULL AUTO_INCREMENT)';

    app.get('/create_db', (req, res) => {
        db.query(create_db, (err, result) => {
            if(err) throw err;
            res.send('Database created');
        })
    });    
    app.get('/create_tables', (req, res) => {
        db.query(create_users, (err, result) => {
            if(err) throw err;
            res.send('Table users created');
        })
    });

}

module.exports = route;