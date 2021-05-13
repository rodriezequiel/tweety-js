const express = require('express');
const morgan = require('morgan'); //middleware application logger
const nunjucks = require('nunjucks');

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan('tiny'));
app.use(express.static('./public'));

let tweetsDeEjemplo = [
    { id: 1, name: 'juan', content: 'este es un tweeettt de juan' },
    { id: 2, name: 'carlos', content: 'este es un tweeettt de carlos' },
    { id: 3, name: 'pepe', content: 'este es un tweeettt de pepe' },
];

app.get('/', function (req, res) {
    res.render('index', { tweets: tweetsDeEjemplo });
});

app.listen(3000, function () {
    console.log('Servidor corriendo en http://localhost:3000/');
});

// hola

// app.get('/stylesheets/style.css', (req,res) =>{
//     res.sendFile(__dirname+"/public/stylesheets/style.css");
// })

// app.use(logIn);
// app.use('/special', function (req, res, next){
//     console.log("Llegaste a un área especial");
//     next();
// })

// function logIn (req, res, next) {
//     // hacé tu logueo acá, probá console.log(req)
//     // llamá a `next()`. Sino tu app recibirá pedidos
//     // pero no responderá adecuadamente.
//  console.log(`${req.method} ${req.url}`);
//     next();
// }
