const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/create-order', async (req, res) => {


})



app.listen(() => {

}, 3001)
