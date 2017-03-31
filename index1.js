var express = require('express');
var app = express();
var _ = require('underscore');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('hello get /');
});

var articles = [{
		id:1,
		name:"kotiki",
		body:'kotiki murkotiki'
	},{
		id:2,
		name:"kot",
		body:'kot murkot'
	}];

app.post('/articles', function(req, res){
	if (req.body.name == '' && req.body.bodyT == '') {
		res.status(406);
		res.send('All field must be filled');
	}
	if (req.body.name == '') {
		res.status(406);
		res.send('The field "Heading" must be filled');
	}
	if (req.body.bodyT == '') {
		res.status(406);
		res.send('The field "Your text" must be filled');
	}
	res.send('seccess!');
});

app.post('/articlesTask6', function(req, res){
		var password = req.body.password;
		var email = req.body.email;
		function validateEmail(email) {
    		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		return re.test(email);
		}
	if (email == '' && password == '') {
		res.status(406);
		res.send('All field must be filled');
	}
	if (!validateEmail(email)) {
		res.status(406);
		res.send('incorect email');
	}
	if (password.length < 7) {
		res.status(406);
		res.send('password too short');
	}
	res.send('success!');
});

app.get('/articles/:id', function(req, res){
	console.log(req.params.id);
	var article =  _.find(articles, function(elm){
		return req.params.id == elm.id;
	});
	res.send(article);
});

app.listen(3000, function(){
	console.log('example app listening on port 3000');
});	