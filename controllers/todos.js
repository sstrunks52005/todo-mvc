// another variable
const Todo = require('../models/Todo')

module.exports = {
    // previously in old code, had to go to db, find todos collection, find all doc in collection and turn into array
    //Todo is a MODEL SCHEMA 
    getTodos: async (req,res)=>{
        try{
            // find and then render into ejs. Mongoose already puts everything in array so don't need toArray
            const todoItems = await Todo.find()
            // how many items left to be processed. countDocuments goes into mongoDB and count the # of documents
            const itemsLeft = await Todo.countDocuments({completed: false})
            // left is a variable used in todo.ejs
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    // create todo then refresh page /todos -> get request
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    