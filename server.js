var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8811;
var mongoose = require('mongoose');
var ProductsController = require('./controllers/ProductsController');

var mongooseURI = 'mongodb://localhost/8811/productStore';
mongoose.connect(mongooseURI, function(err){
  if(err){ throw err;}
  });

mongoose.set('debug', true);
mongoose.connection.once('open', function(){
  console.log('mongoose connected to ' + mongooseURI);
  })

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use(cors());


app.get('/products', ProductsController.read);

app.get('/products/:id', ProductsController.findName);

app.put('/products/:id', ProductsController.update);

app.delete('/products/:id', ProductsController.remove);

app.post('/products', ProductsController.create);

 app.listen(port, function(){
   console.log('Listening on port: ' + port);
 });
