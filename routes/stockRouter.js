import { Router } from "express";
import stockController from "../controllers/stockController.js";
import { Response } from "../utils/core.js";
import testMiddleware from "../middlewares/testMiddleware.js";

const router = Router();

router.route('/')
    .get(stockController.all)
    .post(stockController.create);

router.route('/:id')
    .get(testMiddleware, stockController.show)
    .put(stockController.update)
    .delete(stockController.delete);

router.use((err, res) => {
    Response.error(res, 'An error occurred', err, 500);
});
export default router;