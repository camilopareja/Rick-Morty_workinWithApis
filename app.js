const express = require('express');
const app = express();
const methodOverride = require ("method-override")
const path = require('path');

// Activar local host para pruebas en el entorno de desarrollo

app.listen(3000, ()=>console.log("Puerto 3000 funciona correctamente"))

app.set("view engine", "ejs");
app.use(methodOverride ("_method"))
app.use("", express.static(__dirname + "/public"));;
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Requerimiento rutas

var indexRouter = require('./routes/index');
var characterRouter = require('./routes/character');

// Rutas

app.use('/', indexRouter);
app.use('/character', characterRouter);