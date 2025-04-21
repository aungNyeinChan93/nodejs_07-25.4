
const Response = {
    success: (res, message = '', result = {}, status = 200) => {
        res.status(status).json({
            message,
            result,
        })
    },
    error: (res, message = '', error = {}, status = 404) => {
        res.status(status).json({
            message,
            error,
        })
    }
}


export { Response };