var express = require('express'); //importamos la dependencia
var app = express(); //declaramos una App de Express
let ejs = require('ejs'); //declaramos el paquete ejs
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));


app.use('/', function (req,res, next) {
    console.log('Request Url:' + req.url);
    next();
});
//prinera ruta (está al nivel de la raiz /), Hello Worldd! La función render renderiza el archivo ejs.
app.get('/', function (req, res) {
    res.render('index');
});
//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});
//Tercera ruta, recibe un parametro, la función render renderiza el archivo ejs.
app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
});

app.listen(port); //levantar el server y ponerlo a la escucha