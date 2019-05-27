const express = require('express')
const TasksControllers = require('./controllers/tasksControllers')

const routes = express.Router()

routes.post('/api/tasks', TasksControllers.store)
routes.get('/api/tasks', TasksControllers.list)
routes.delete('/api/tasks/:id', TasksControllers.delete)
routes.put('/api/tasks/:id', TasksControllers.update)

routes.get('/', (req, res) => {
  res.render('index')
})
routes.get('/add', (req, res) => {
  res.render('form')
})

module.exports = routes
