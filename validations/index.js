const validateFlightsQueryParams = (query) => {
    let errors = []
    if (!query.origin) {
        errors.push("Origin is required.")
    } else if (!query.destination) {
        errors.push("Destination is required.")
    }

    return errors
}

const validateHotelsQueryParams = (query) => {
    let errors = []
    if (!query.location) {
        errors.push("Location is required.")
    }

    return errors
}

const validateSitesQueryParams = (query) => {
    let errors = []
    if (!query.location) {
        errors.push("Location is required.")
    }

    return errors
}


module.exports = { validateFlightsQueryParams, validateHotelsQueryParams, validateSitesQueryParams }