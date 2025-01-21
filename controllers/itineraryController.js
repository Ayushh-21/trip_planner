const axiosInstance = require('../lib/axios');
const { validateFlightsQueryParams, validateHotelsQueryParams, validateSitesQueryParams } = require('../validations');

const getFlights = async (req, res) => {
    try {
        const test_error = req.query.test_error
        const rate_limit = req.query.rate_limit
        const response = await axiosInstance.get(`/flights?test_error=${test_error}&rate_limit=${rate_limit}`)
        res.json(response.data)
    } catch (error) {
        console.error(error)

        if (error.response.status === 429) {
            res.status(429).json({
                error: "Rate limit exceed!. Please try again after sometime."
            })
        } else if (error.response.status === 500 &&
            error.response.data.error === "Simulated error for testing purposes."
        ) {
            res.status(500).json({
                error: "Simulated error for testing purposes."
            })
        }

        res.status(500).json({
            error: "Failed to fetch flights"
        })
    }
}

const getHotels = async (req, res) => {
    try {
        const test_error = req.query.test_error
        const rate_limit = req.query.rate_limit
        const response = await axiosInstance.get(`/hotels?test_error=${test_error}&rate_limit=${rate_limit}`)
        res.json(response.data)
    } catch (error) {
        console.error(error)
        if (error.response.status === 429) {
            res.status(429).json({
                error: "Rate limit exceed!. Please try again after sometime."
            })
        } else if (error.response.status === 500 &&
            error.response.data.error === "Simulated error for testing purposes."
        ) {
            res.status(500).json({
                error: "Simulated error for testing purposes."
            })
        }

        res.status(500).json({
            error: "Failed to fetch hotels"
        })
    }
}

const getSites = async (req, res) => {
    try {
        const test_error = req.query.test_error
        const rate_limit = req.query.rate_limit
        const response = await axiosInstance.get(`/sites?test_error=${test_error}&rate_limit=${rate_limit}`)
        res.json(response.data)
    } catch (error) {
        console.error(error)
        if (error.response.status === 429) {
            res.status(429).json({
                error: "Rate limit exceed!. Please try again after sometime."
            })
        } else if (error.response.status === 500 &&
            error.response.data.error === "Simulated error for testing purposes."
        ) {
            res.status(500).json({
                error: "Simulated error for testing purposes."
            })
        }

        res.status(500).json({
            error: "Failed to fetch sites"
        })
    }
}

const getFlightsByOriginAndDestination = async (req, res) => {
    const errors = validateFlightsQueryParams(req.query)
    if (errors.length > 0) return res.status(400).json({ errors })

    try {
        const { origin, destination } = req.query;
        const response = await axiosInstance.get(`/flights/search?origin=${origin}&destination=${destination}`)
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch flights details" })
    }
}

const getHotelsByLocation = async (req, res) => {
    const errors = validateHotelsQueryParams(req.query)
    if (errors.length > 0) return res.status(400).json({ errors })

    try {
        const { location } = req.query
        const response = await axiosInstance.get(`/hotels/search?location=${location}`)
        res.send(response.data)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch hotel details" })
    }
}

const getSitesByLocation = async (req, res) => {
    const errors = validateHotelsQueryParams(req.query)
    if (errors.length > 0) return res.status(400).json({ errors })

    try {
        const { location } = req.query
        const response = await axiosInstance.get(`/sites/search?location=${location}`)
        res.send(response.data)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch site details" })
    }
}



module.exports = { getFlights, getHotels, getSites, getFlightsByOriginAndDestination, getHotelsByLocation, getSitesByLocation }