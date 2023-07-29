import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const options: cors.CorsOptions = {
  methods: 'GET,POST',
  origin: '*'
}

const app = express()
app.use(helmet())
app.use(cors(options))
app.use(express.json())

export { app }