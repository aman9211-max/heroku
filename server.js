const express = require('express');
const app = express();
const {db, Tasks} = require('./db');
const PORT = process.env.PORT || 4444;


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/tasks', async (req, res) => {
    res.send(await Tasks.findAll())
})

app.post('/tasks', async (req, res) => {
    res.send(await Tasks.create(req.body));
})

db.sync() 
.then(() => {
    console.log(`started on http://localhost:${PORT}`)
})



