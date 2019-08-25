const express = require("express");

const server = express();

server.use(express.json());

//localhost:3000/teste
const users = [
  {
    name: "Mario Alberto",
    age: 19
  },
  {
    name: "Fabrio Porchar",
    age: 29
  },
  {
    name: "Kibi loko",
    age: 93
  },
  {
    name: "Totoro",
    age: 93
  }
];

//Query params = ? teste=1
server.get("/teste", (req, res) => {
  const nome = req.query.nome;

  return res.json({ message: `Hello ${nome}` });
});

//Global middleware
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!users[req.params.index]) {
    return res.status(400).json({ error: "User does not exist" });
  }

  req.user = user;

  return next();
}

//CRUD - Creatr, Read, Update, Delete

//Router params = /users/1
server.get("/users", (req, res) => {
  return res.json(users);
});

//Router params = /usres/1
server.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json(req.user);
});

server.post("/users", checkUserExists, (req, res) => {
  const newUser = req.body;

  users.push(newUser);

  return res.send(
    `░░░░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░░░░░░
  ░░░░░░░░░░░░▄████████████████▄░░░░░░░░░░
  ░░░░░░░░░░▄██▀░░░░░░░▀▀████████▄░░░░░░░░
  ░░░░░░░░░▄█▀░░░░░░░░░░░░░▀▀██████▄░░░░░░
  ░░░░░░░░░███▄░░░░░░░░░░░░░░░▀██████░░░░░
  ░░░░░░░░▄░░▀▀█░░░░░░░░░░░░░░░░██████░░░░
  ░░░░░░░█▄██▀▄░░░░░▄███▄▄░░░░░░███████░░░
  ░░░░░░▄▀▀▀██▀░░░░░▄▄▄░░▀█░░░░█████████░░
  ░░░░░▄▀░░░░▄▀░▄░░█▄██▀▄░░░░░██████████░░
  ░░░░░█░░░░▀░░░█░░░▀▀▀▀▀░░░░░██████████▄░
  ░░░░░░░▄█▄░░░░░▄░░░░░░░░░░░░██████████▀░
  ░░░░░░█▀░░░░▀▀░░░░░░░░░░░░░███▀███████░░
  ░░░▄▄░▀░▄░░░░░░░░░░░░░░░░░░▀░░░██████░░░
  ██████░░█▄█▀░▄░░██░░░░░░░░░░░█▄█████▀░░░
  ██████░░░▀████▀░▀░░░░░░░░░░░▄▀█████████▄
  ██████░░░░░░░░░░░░░░░░░░░░▀▄████████████
  ██████░░▄░░░░░░░░░░░░░▄░░░██████████████
  ██████░░░░░░░░░░░░░▄█▀░░▄███████████████
  ███████▄▄░░░░░░░░░▀░░░▄▀▄███████████████`
  );
});

//Router params = /usres/1
server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const user = req.body;

  users[index] = user;

  return res.json(users);
});

//Router params = /usres/1
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

server.listen(3000);
