import { app } from './app'
import { SERVER_PORT } from './config/api'

const port = SERVER_PORT

const start = async () => {
  app.listen(port, () => {
    console.log(`🚀 servidor O N L I N E ${port}`)
  })
}
void start()