import Test from '../models/test_model.js';

const TestController = {
    create: async (req, res, next) => {
        try {
            const tests = await Test({ name: 'Test', age: 25, email: 'test@123', password: 'test123' }).save();
            res.status(200).json({
                test: req.test,
                create: tests,
            });
        } catch (err) {
            next(err)
            // res.status(500).json({ message: 'Error fetching tests', error });
        }
    }
}

export default TestController;