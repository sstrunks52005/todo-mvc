const express = require('express')
const app = express()
const connectDB = require('./config/database')
//look at routes/home to see what this does. Imports from home.js. Mom calls you home, go to folder to respond
const homeRoutes = require('./routes/home')
//every entry goes to todo route
const todoRoutes = require('./routes/todos')

// for privacy
require('dotenv').config({path: './config/.env'})

// calling connectDB function from the require ./config/database
connectDB()

app.set('view engine', 'ejs')
// holds html and css. static files
app.use(express.static('public'))
// pulls from the body 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// built from express. Separate out different routers
// This is the home page tied to variable homeRoutes. If routes stop working, you know where to look
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
// env var for port for deployment
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    