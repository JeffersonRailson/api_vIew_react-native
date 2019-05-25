const Tasks = require('../models/tasks')

class TaskControllers {
  async store (req, res) {
    const task = Tasks.create(req.body)
    return res.json(task)
  }
  async update (req, res) {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(task)
  }
  async delete (req, res) {
    await Tasks.findByIdAndDelete(req.params.id)
    return res.json({ mensage: 'deleted' })
  }
  async list (req, res) {
    const task = await Tasks.find()
    return res.json(task)
  }
  async show (req, res) {
    const task = await Tasks.findById(req.params.id)
    return res.json(task)
  }
}

module.exports = new TaskControllers()
