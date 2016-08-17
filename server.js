// requirements of modules
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);
var validator = require('express-validator');


// use of middlewares
app.use(validator());

//root directory of the project
app.use(express.static(__dirname + '/public'));

//body parser middle ware usage
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '9950mb'
}))

app.use(cookieParser());



app.get('/',function(req,res){
res.sendfile('views/index.html')
});


app.post('/', function (req, res) {
	
    req.checkBody("email", "Enter a valid email address.").isEmail();
    req.checkBody("name", "Enter a valid User Name.").notEmpty();   
	req.check("password", "minimum 6 & maximum 14 characters").matches("^[A-Z]^[0-9]{6,14}$", "i");
	req.checkBody("password", "Enter a valid password.").notEmpty();
	req.checkBody('password_confirm','Passwords do not match.').equals(req.body.password);
	req.check("password_confirm", "minimum 6 & maximum 14 characters").matches("^[A-Z]^[0-9]{6,14}$", "i");
	req.checkBody("password_confirm", "Enter a valid password_confirm.").notEmpty();
    req.checkBody("comments", "Enter a valid comments.").notEmpty();
    req.checkBody("url", "Enter a valid Url address.").notEmpty();
    req.checkBody("staffno", "Enter a valid Staff number.").notEmpty().isInt();

  var errors = req.validationErrors();
  if (errors) {
	  console.log(false)
	res.send({error:errors})
  } else {
	  console.log(true)
    // normal processing here
  }
});



server.listen(8088);
console.log('server running on 8088');