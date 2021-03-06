#!/bin/bash

echo     Criando ambiente de desenvolvimento....;

cd /home/jura/Projetos/git.rocketseat/desafio02
yarn sequelize db:migrate

echo     ░░░░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░░░░░░;
echo     ░░░░░░░░░░░░▄████████████████▄░░░░░░░░░░;
echo     ░░░░░░░░░░▄██▀░░░░░░░▀▀████████▄░░░░░░░░;
echo     ░░░░░░░░░▄█▀░░░░░░░░░░░░░▀▀██████▄░░░░░░;
echo     ░░░░░░░░░███▄░░░░░░░░░░░░░░░▀██████░░░░░;
echo     ░░░░░░░░▄░░▀▀█░░░░░░░░░░░░░░░░██████░░░░;
echo     ░░░░░░░█▄██▀▄░░░░░▄███▄▄░░░░░░███████░░░;
echo     ░░░░░░▄▀▀▀██▀░░░░░▄▄▄░░▀█░░░░█████████░░;
echo     ░░░░░▄▀░░░░▄▀░▄░░█▄██▀▄░░░░░██████████░░;
echo     ░░░░░█░░░░▀░░░█░░░▀▀▀▀▀░░░░░██████████▄░;
echo     ░░░░░░░▄█▄░░░░░▄░░░░░░░░░░░░██████████▀░;
echo     ░░░░░░█▀░░░░▀▀░░░░░░░░░░░░░███▀███████░░;
echo     ░░░▄▄░▀░▄░░░░░░░░░░░░░░░░░░▀░░░██████░░░;
echo     ██████░░█▄█▀░▄░░██░░░░░░░░░░░█▄█████▀░░░;
echo     ██████░░░▀████▀░▀░░░░░░░░░░░▄▀█████████▄;
echo     ██████░░░░░░░░░░░░░░░░░░░░▀▄████████████;
echo     ██████░░▄░░░░░░░░░░░░░▄░░░██████████████;
echo     ██████░░░░░░░░░░░░░▄█▀░░▄███████████████;
echo     ███████▄▄░░░░░░░░░▀░░░▄▀▄███████████████;

echo     Ambiente criando com sucesso............!;

yarn start

composer self-update
composer update

