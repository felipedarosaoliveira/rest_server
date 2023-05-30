const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const api = express.Router();
routes.configure(api);

app.use('/api',api);

app.listen('5000',()=>console.log("Servidor rodando na porta 5000"));

