'use strict'

var mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

	exports.list_all_tasks = function(req, res) {
		Task.find({})
			.sort({Created_date:'desc'})
			.then(function(tasks) {
				res.render('tasks/index', {
					tasks: tasks
				});	
			})
			.catch(function(err){
					console.log("Error while connnecting MongoDB ::---", err);	
			});
			/*function(err, task) {
			if(err)
				res.send(err);
			res.json(task);
		});*/
	};


	exports.create_a_task = function(req, res) {
		var new_task = new Task(req.body);
		new_task.save(function(err, task) {
			if(err)
				res.send(err);
			res.json(task);
		});
	};


	exports.read_a_task = function(req, res) {
			//console.log("req ::", req);
			//console.log("res ::", res);
		Task.findById(req.params.tasksId, function(err, task) {
			console.log("err ::", err);
			console.log("task ::", task);
			if(err)
				res.send(err);
			res.json(task);
		});
	};

	exports.update_a_task = function(req, res) {
		Task.findOneAndUpdate({_id: req.params.tasksId}, req.body, {new: true}, function(err, task) {
			if(err)
				res.send(err);
			res.json(task);
		});
	};


	exports.delete_a_task = function(req, res) {
		Task.remove({_id: req.params.tasksId}, function(err, task){
			if(err)
				res.send(err);
			res.json({ message : 'Task successfullt deleted'});
		});
	};

  