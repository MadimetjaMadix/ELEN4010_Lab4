const path = require('path')
const express = require('express')
const router = express.Router()
// const classList = ['Madix', 'Seth'] // our class list array
const list = require('./classList')

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(list.everything()) // Respond with JSON
})

router.get('/api/get/:id', function (req, res) {
  res.json(list.get(req.params.id)) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})

router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.studentname)
  list.add(req.body.studentname)
  // classList.push(req.body.studentname)
  res.redirect(req.baseUrl + '/create')
})

router.post('/api/delete', function (req, res) {
  console.log('deleting a student at entry: ', req.body.studentrow)
  list.delete(req.body.studentrow)
  res.redirect(req.baseUrl + '/delete')
})

router.post('/api/edit', function (req, res) {
  const row = req.body.studentnew.split(',')[0] - 1
  const details = req.body.studentnew.split(',')[1]
  console.log('editing a student entry at index ', row)
  list.edit(details, row)
  res.redirect(req.baseUrl + '/edit')
})

module.exports = router
