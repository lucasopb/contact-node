const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({title: "Not found", message: err.message, stackTrace: err.stack})
            break;
        case constants.VALIDATION:
            res.json({title: "Validation Failed", message: err.message, stackTrace: err.stack})
            break
        case constants.UNAUTHORIZED:
            res.json({title: "unauthorized", message: err.message, stackTrace: err.stack})
            break
        case constants.FORBIDEN:
            res.json({title: "forbiden", message: err.message, stackTrace: err.stack})
            break
        case constants.SERVER_ERROR:
            res.json({title: "Server error", message: err.message, stackTrace: err.stack})
            break
        default:
            console.log("No error")
            break;
    }
}

module.exports = errorHandler