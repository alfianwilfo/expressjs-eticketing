let errorHandler = (err, req, res, next) => {
    console.log(err);
    let status = 500
    let msg = "Internal server error"

    switch (err.name) {
        case "SequelizeValidationError":
            status = 400
            msg = err.errors[0].message
            break;
    
        default:
            break;
    }
    res.status(status).json({message: msg})
}

module.exports = errorHandler