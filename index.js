const express = require('express')
const recipesRoute = require('./api/routes/recipes')

const server = express()
const port = process.env.PORT || 5000

server.use(recipesRoute)



server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})