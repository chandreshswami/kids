'use strict';
var validationObj = require('../helpers/routeHelpers');
var validateBody = validationObj.validateBody;
var schemas = validationObj.schemas;
var mongoose = require('mongoose');
var Tasks = require('../models/todoListModel');
var task = mongoose.model('Tasks');



module.exports = function(app) {
	var todoList = require('../controllers/todoListController');

	// Handlebars route
	app.get('/', function(req, res) {
		var title = "ToDoList";
		res.render('index', {
			title: title,
			
		});
	});

	app.get('/about', function(req, res) {
		res.render('about');
	});

	//Add Tasks Form
	app.get('/tasks/add', function(req, res) {
		res.render('tasks/add');
	});

	//add post request on process from to add task
	app.post('/tasks/add', function(req, res) {
		//console.log("req", req.body)
		var err = [];

		if(!req.body.title) {
			err.push({text: 'Please add task todo'});
		}
		if(!req.body.details) {
			err.push({text: 'Please add details todo'});
		}	
		if(!req.body.status) {
			err.push({text: 'Please add status of task'});
		}
		
		if(err.length > 0) {
			res.render('tasks/add', {
				errors: err,
				name: req.body.title,
				details: req.body.details,
				status: req.body.status
			});
		} 
		else {
			var newTask = {
				name: req.body.title,
				details: req.body.details,
				status: req.body.status
			};
			new Tasks(newTask)
				.save()
				.then(function(task) {
					res.redirect('/tasks');
				});

		}
	});

//todoList Routes to display taskes in task page
	app.route('/tasks')
	//.get(validateBody(schemas.taskSchema), todoList.list_all_tasks);
	.get(todoList.list_all_tasks);

	/*.post(validateBody(schemas.taskSchema), todoList.create_a_task);*/

	app.route('/tasks/:tasksId')
	//.get(validateBody(schemas.taskSchema), todoList.read_a_task)
	.get(todoList.read_a_task);
	/*.put(validateBody(schemas.taskSchema), todoList.update_a_task)
	.delete(validateBody(schemas.taskSchema), todoList.delete_a_task);*/

}