import express from 'express';
import env from 'dotenv';
import { log } from 'node:console';
import { URL } from 'node:url';
import mongoose from 'mongoose';
import testMiddleware from './middlewares/testMiddleware.js';
import testsRouter from './routes/testsRouter.js'
import usersRouter from './routes/userRouter.js';
import postsRouter from './routes/postRouter.js';
import stockRouter from './routes/stockRouter.js';

env.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL).then(() => {
    const db = new URL(process.env.DB_URL);
    // console.log(db);
    log(`Connected to ${db.protocol} ${db.pathname}`);
    app.listen(process.env.PORT || 3000, () => log(`Server is running on port ${process.env.PORT || 3000}`));
    init();
}).catch((error) => {
    log('Error connecting to MongoDB:', error);
});

const init = () => {
    app.use('/api/tests', testMiddleware, testsRouter);

    app.use('/api/users', testMiddleware, usersRouter);

    app.use('/api/posts', testMiddleware, postsRouter);

    app.use('/api/stocks', testMiddleware, stockRouter);
}


