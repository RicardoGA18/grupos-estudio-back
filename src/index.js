const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
  origin: 'http://localhost:3000/'
}))

app.listen(8000,() => {
  console.log('Server on port 8000')
})