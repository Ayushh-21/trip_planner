const axiosInstance = require('../lib/axios');

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

module.exports = { getFlights, getHotels, getSites }