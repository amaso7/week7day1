// importing express into your app
const express = require('express')
const app = express()  
const cors = require('cors')
app.use(cors())
app.use(express.json())

//Set an empty array for todolist 
let todolist = []
// using .get funtiction to request the todo list in json format 
app.get('/todo', (req, res) =>{
    res.json(todolist)
})
// uses .post function to add objects into the array
app.post('/todo', (req, res)=>{
    const title = req.body.title 
    const priority = req.body.priority 
    const date = req.body.date
    const todoListUl = {title: title, date: date, priority: priority }
    todolist.push(todoListUl)
    res.json(todoListUl)

})
//sets port to 3000 for server
app.listen(3000, () => {
    console.log('Server is running...')
})