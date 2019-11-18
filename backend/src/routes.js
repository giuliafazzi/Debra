const express = require('express');

const SchoolController = require('./controllers/SchoolController');
const ClassController = require('./controllers/ClassController');
const StudentController = require('./controllers/StudentController');
const PostController = require('./controllers/PostController');

const routes = express.Router();

// Schools
routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.index);

// Classes
routes.get('/schools/:school_id/classes', ClassController.index);
routes.post('/schools/:school_id/classes', ClassController.store);

// Students
routes.post('/schools/:school_id/students', StudentController.store);
routes.get('/schools/:school_id/students', StudentController.index);
routes.get('/schools/:school_id/students/:student_id', StudentController.show);

// Posts
routes.post('/schools/:school_id/students/:student_id/posts', PostController.store);
routes.get('/schools/:school_id/students/:student_id/posts', PostController.index);
routes.get('/schools/:school_id/students/:student_id/posts/:category', PostController.indexByCategory);

module.exports = routes;