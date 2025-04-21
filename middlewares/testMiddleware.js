

const testMiddleware = (req, res, next) => {
    try {
        req.test = 'Test middleware added this property';
        console.log('Test middleware executed');
        next();
    } catch (error) {
        next(new Error('Error in test middleware', error));
    }
};


export default testMiddleware;