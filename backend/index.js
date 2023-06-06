import express from 'express'
import Connection from './Database/DB.js'
import router from './Route/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const Port = 9000

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({origin: ['https://projects.onrender.com']}))
app.use('/' , router)

Connection()

app.listen(Port, () => {
  console.log("Server is running on port" , {Port})
})

