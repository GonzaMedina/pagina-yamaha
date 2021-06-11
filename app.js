// Configuración inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;


// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// Aquí detallar rutas
app.get("/", (resq, res) =>{
  res.render('index', {
    titulo: 'inicio'
  })
})

app. get('/elements', (rec, res) => {
  res.render('elements', {
    titulo: 'elements',
    estado: true,
    servicio: ''
  })
})

app. get('/generic', (rec, res) => {
  res.render('generic', {
    titulo: 'generic',
    estado: true,
    servicio: ''
  })
})

app. get('/generic1', (rec, res) => {
  res.render('generic1', {
    titulo: 'generic1',
    estado: true,
    servicio: ''
  })
})

app. get('/generic2', (rec, res) => {
  res.render('generic2', {
    titulo: 'generic2',
    estado: true,
    servicio: ''
  })
})

app. get('/generic3', (rec, res) => {
  res.render('generic3', {
    titulo: 'generic3',
    estado: true,
    servicio: ''
  })
})

app. get('/generic4', (rec, res) => {
  res.render('generic4', {
    titulo: 'generic4',
    estado: true,
    servicio: ''
  })
})

app. get('/generic5', (rec, res) => {
  res.render('generic5', {
    titulo: 'generic5',
    estado: true,
    servicio: ''
  })
})

app. get('/generic6', (rec, res) => {
  res.render('generic6', {
    titulo: 'generic6',
    estado: true,
    servicio: ''
  })
})

app. get('/index', (rec, res) => {
  res.render('index', {
    titulo: 'index',
    estado: true,
    servicio: ''
  })
})

// Iniciar servidor
app.listen(port, () => {

  console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});