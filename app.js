var express = require('express');
var logger = require('morgan')
var bodyParser = require('body-parser')
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var admin = require('firebase-admin')
var storage = require('firebase/storage')


var serviceAccount = require('./wardrobed-3c159-firebase-adminsdk-t0iva-260b66cc4b.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://wardrobed-3c159.firebaseio.com'
})

var database = firebaseAdmin.database()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(logger('dev'))

app.get('/', function(req, res){
  res.render('home.ejs')
});

app.get('/calendar', function(req, res){
  res.render('calendar.ejs')
});

app.get('/imageupload', function(req, res){
  res.render('calendar.ejs')
});



app.post('/upload', function(req, res){

  // // create an incoming form object
  // var form = new formidable.IncomingForm();
  

  // // specify that we want to allow the user to upload multiple files in a single request
  // form.multiples = true;

  // // store all uploads in the /uploads directory
  // form.uploadDir = path.join(__dirname, '/uploads');

  // // every time a file has been uploaded successfully,
  // // rename it to it's orignal name
  // form.on('file', function(field, file) {
  //   fs.rename(file.path, path.join(form.uploadDir, file.name));
  // });

  // // log any errors that occur
  // form.on('error', function(err) {
  //   console.log('An error has occured: \n' + err);
  // });

  // // once all the files have been uploaded, send a response to the client
  // form.on('end', function() {
  //   res.end('success');
  // });

  
  // // parse the incoming request containing the form data
  // form.parse(req);
  
  

});

var port = process.env.PORT

app.listen(port, function(){
    console.log('App running on port ' + port)
})