import express from 'express' //const express = require('express')
import cors from 'cors' //const cors = require('cors')
import logger from 'morgan' // const logger = require('morgan')

import {router} from './routes/index'



//cria o app
export const app = express()

//configuração dos middlewares
app.use(express.json())

//desse jeito, abrimos todas as portas, então qualquer aplicação externa irá conseguir acessar a API.
app.use(cors())
app.use(logger('dev'))

//Integra o endpoint na aplicação
app.use('/', router)