const express = require( 'express' );
const chalk = require('chalk')
const morgan = require('morgan');
const app = express(); 

app.use(morgan('tiny'));
// app.use(logIn);
app.use('/special', function (req, res, next){
    console.log("Llegaste a un área especial");
    next();
})

function logIn (req, res, next) {
    // hacé tu logueo acá, probá console.log(req)
    // llamá a `next()`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
    console.log(`${chalk.magenta(req.method)} ${chalk.green(req.url)}`);
    next();
}

// app.get('/special/:id', logger, (req, res) =>{
//     res.send("Hola");
// });

app.listen(3000, function(){
    console.log('Servidor corriendo en http://localhost:3000/')
});