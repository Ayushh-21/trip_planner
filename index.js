const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axiosInstance = require('./lib/axios')
const { sequelize } = require('./models')
const { createItinerary, getItinerary } = require('./controllers/dataController')
const { getFlights, getHotels, getSites, getFlightsByOriginAndDestination, getHotelsByLocation, getSitesByLocation } = require('./controllers/itineraryController')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/itinerary', createItinerary)
app.get('/itinerary/:id', getItinerary)

app.get('/data/flights', getFlights)
app.get('/data/hotels', getHotels)
app.get('/data/sites', getSites)
app.get('/flights/search', getFlightsByOriginAndDestination)
app.get('/hotels/search', getHotelsByLocation)
app.get('/sites/search', getSitesByLocation)

sequelize
    .authenticate()
    .then(() => console.log("Database Conneted....."))
    .catch(error => console.log('Unable to connect to the database:', error))


const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port, http://localhost:${process.env.PORT || PORT}`);
})

