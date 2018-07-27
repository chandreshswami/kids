var express = require('express'),
	exphbs = require('express-handlebars'),
	app = express(),
	port = process.env.PORT || 5000,
	mongoose = require('mongoose'),
	Task = require('./app/models/todoListModel'), //created model loading here
	bodyParser = require('body-parser');

//Adding handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb', {
	//useMongoClient: true
	useNewUrlParser: true
})
.then(function(){
	//console.log("MongoDB Connected...!!!");
})
.catch(function(err){
	//console.log("Error while connnecting MongoDB ::---", err);
});

//Load Task modal
/*require('./app/models/TodoListModel');*/
/*var task = mongoose.model('Tasks');
*///console.log("task  " , task);

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var routes = require('./app/routes/todoListRoutes');
routes(app); //register routes


app.listen(port);

console.log("todolidt RESTful API server start on   : "  +port);