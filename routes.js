const express = require("express");
const app = express();
const connection = require("./connectdb");

function routes(app) {
  let create_db =
    "CREATE DATABASE `treelos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci";
  let create_users =
    "CREATE TABLE users(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), login VARCHAR(80), password VARCHAR(80), mail VARCHAR(80))";
  let create_gameMasters =
    "CREATE TABLE gameMasters(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), login VARCHAR(80), password VARCHAR(80), mail VARCHAR(80))";
  let create_players =
    "CREATE TABLE players(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), login VARCHAR(80), password VARCHAR(80), mail VARCHAR(80))";
  let create_managers =
    "CREATE TABLE managers(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), login VARCHAR(80), password VARCHAR(80), mail VARCHAR(80))";
  let create_gameTypes =
    "CREATE TABLE gameTypes(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), img_url VARCHAR(255), bool_multisession BOOL, informations TEXT)";
  let create_games =
    "CREATE TABLE games(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), id_manager INT, id_gamemaster INT, id_type INT, FOREIGN KEY (id_manager) REFERENCES managers(id), FOREIGN KEY (id_gamemaster) REFERENCES gameMasters(id), FOREIGN KEY (id_type) REFERENCES gameTypes(id))";
  let create_characters =
    "CREATE TABLE characters(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), id_player INT, id_game INT, FOREIGN KEY (id_player) REFERENCES players(id), FOREIGN KEY (id_game) REFERENCES games(id))";
  let create_characterSpecs =
    "CREATE TABLE characterSpecs(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, id_character INT, stats TEXT, FOREIGN KEY (id_character) REFERENCES characters(id))";
  let create_sessions =
    "CREATE TABLE sessions(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, number VARCHAR(80), login VARCHAR(80), pin_code VARCHAR(80), active BOOL, id_game INT, FOREIGN KEY (id_game) REFERENCES games(id))";
  let create_characterActions =
    "CREATE TABLE characterActions(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(80), description TEXT, id_session INT, id_character INT, stats TEXT, FOREIGN KEY (id_session) REFERENCES sessions(id), FOREIGN KEY (id_character) REFERENCES characters(id))";

  // CREATE DB
  app.get("/create_db", (req, res) => {
    connection.query(create_db, (err, result) => {
      if (err) throw err;
      res.send("Database created");
    });
  });

  // CREATE TABLE USERS
  app.get("/create_users", (req, res) => {
    connection.query(create_users, (err, result) => {
      if (err) throw err;
      res.send("Table users created");
    });
  });

  // CREATE TABLE GAMEMASTERS
  app.get("/create_gameMasters", (req, res) => {
    connection.query(create_gameMasters, (err, result) => {
      if (err) throw err;
      res.send("Table gameMasters created");
    });
  });

  // CREATE TABLE PLAYERS
  app.get("/create_players", (req, res) => {
    connection.query(create_players, (err, result) => {
      if (err) throw err;
      res.send("Table players created");
    });
  });

  // CREATE TABLE MANAGERS
  app.get("/create_managers", (req, res) => {
    connection.query(create_managers, (err, result) => {
      if (err) throw err;
      res.send("Table managers created");
    });
  });

  // CREATE TABLE GAMETYPES
  app.get("/create_gameTypes", (req, res) => {
    connection.query(create_gameTypes, (err, result) => {
      if (err) throw err;
      res.send("Table gameTypes created");
    });
  });

  // CREATE TABLE GAMES
  app.get("/create_games", (req, res) => {
    connection.query(create_games, (err, result) => {
      if (err) throw err;
      res.send("Table games created");
    });
  });

  // CREATE TABLE CHARACTERS
  app.get("/create_characters", (req, res) => {
    connection.query(create_characters, (err, result) => {
      if (err) throw err;
      res.send("Table characters created");
    });
  });

  // CREATE TABLE CHARACTER SPEC
  app.get("/create_characterSpecs", (req, res) => {
    connection.query(create_characterSpecs, (err, result) => {
      if (err) throw err;
      res.send("Table characterSpecs created");
    });
  });

  // CREATE TABLE SESSIONS
  app.get("/create_sessions", (req, res) => {
    connection.query(create_sessions, (err, result) => {
      if (err) throw err;
      res.send("Table Sessions created");
    });
  });

  // CREATE TABLE CHARACTERACTIONS
  app.get("/create_characterActions", (req, res) => {
    connection.query(create_characterActions, (err, result) => {
      if (err) throw err;
      res.send("Table characterActions created");
    });
  });
}

module.exports = routes;
