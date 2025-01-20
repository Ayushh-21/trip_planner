const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axiosInstance = require('./lib/axios')
const { sequelize } = require('./models')
const { createItinerary, getItinerary } = require('./controllers/dataController')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/itinerary', createItinerary)
app.get('/itinerary/:id', getItinerary)

sequelize
    .authenticate()
    .then(() => console.log("Database Conneted....."))
    .catch(error => console.log('Unable to connect to the database:', error))


const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port, http://localhost:${process.env.PORT || PORT}`);
})

