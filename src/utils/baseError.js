const httpStatusCodes = require('./httpStatusCodes')


class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}



class Api404Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = 'Not found.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

class Api500Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER,
        description = 'Server Error.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

module.exports = { Api404Error, BaseError, Api500Error }