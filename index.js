const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

const catagories = require('./data/categories.json')

app.use(cors())

//server default
app.get('/', (req, res) => {

    res.send('Skill Edge running')
})

app.get('/categories', (req, res) => {

    res.send(catagories);

})


app.listen(port, () => {

    console.log('Skill Edge runninng on Port:', port)
})