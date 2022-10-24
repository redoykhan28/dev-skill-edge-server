const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

const catagories = require('./data/categories.json')
const course = require('./data/course.json')

app.use(cors())

//server default
app.get('/', (req, res) => {

    res.send('Skill Edge running')
})

//For category menu
app.get('/categories', (req, res) => {

    res.send(catagories);

})

//For all course
app.get('/course', (req, res) => {

    res.send(course);

})

//For course by category
app.get('/courseByCategory/:id', (req, res) => {

    let id = req.params.id;
    let selectedCourse = course.filter(c => c.category_id === id)
    res.send(selectedCourse)
})

//For course Details
app.get('/courseDetails/:id', (req, res) => {

    let id = req.params.id;
    let courseDetails = course.find(c => c._id === id)
    res.send(courseDetails)
})


app.listen(port, () => {

    console.log('Skill Edge runninng on Port:', port)
})