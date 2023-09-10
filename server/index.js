import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/launguageList.js'
import getQuiz from './routes/courseQuiz.js'
const app = express()
app.use(bodyParser.json())
app.use(cors());
const PORT = 3000  
const CONNECTION_URL = 'mongodb+srv://anishparkhi03:ONK8LKYou3V3Yurl@cluster0.hayl2hj.mongodb.net/?retryWrites=true&w=majority'

app.use('/', router)
app.use('/', getQuiz)


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    })
    .catch(err => {
        console.log(err.message)
    })
