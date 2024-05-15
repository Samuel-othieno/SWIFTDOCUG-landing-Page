import express from 'express';
import morgan from 'morgan';
import {StatusCodes} from 'http-status-codes';
import helmet from "helmet";
import cors from 'cors';
import {findUniquePatient} from './Controllers/users.controller.js';

const App = express()
const PORT = 5000;

//! Middleware
App.use(morgan('dev'))
App.use(express.json())
App.use(helmet())
App.use(cors())

App.get('/', (req, res)=>{
    res.status(StatusCodes.OK).json({message: "Hello, Welcome to SwiftDocUg"})
})

App.get('/user', findUniquePatient)
// App.get('/users', getUsers )
// App.post('/create', createNewUser)
// App.delete('/delete', deletePatients)

App.listen(PORT,(req, res)=>{
    console.log(`Server is running on http://Localhost:${PORT}`)
})