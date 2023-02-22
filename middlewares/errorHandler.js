let errorHandler = (err, req, res, next) => {
    let status = 500
    let msg = "Internal server error"

    switch (err.name) {
        case "SequelizeValidationError":
            status = 400
            msg = err.errors[0].message
            break;
        case "validator":
            status = 400
            msg = err.msg
            break;
        case "Forbidden":
            status = 403
            msg = "Invalid username or password"
            break;
        default:
            break;
    }
    
    res.status(status).json({message: msg})
}

module.exports = errorHandler