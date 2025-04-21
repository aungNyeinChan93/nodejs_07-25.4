import { error } from "node:console";
import Stock from "../models/stock_model.js";
import { Response } from '../utils/core.js'

const stockController = {
    all: async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const perPage = Number(req.query.perPage);
            const offset = (page - 1) * perPage;
            const search = req.query.search || '';
            let filter = {};

            if (search) {
                filter['$text'] = { $search: search };
            }

            const stocks = await Stock.find(filter).limit(perPage).skip(offset).sort({ createdAt: -1 });
            const total = await Stock.countDocuments(filter);

            if (stocks.length === 0) {
                return Response.error(res, 'No stocks found', 404);
            }
            return Response.success(res, 'Stocks fetched successfully', { stocks, total }, 200);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const { name, price, quantity } = req.body;
            if (!name || !price || !quantity) {
                return Response.error(res, 'All fields are required', 400);
            }
            const stock = await Stock.create({ name, price, quantity });
            return Response.success(res, 'Stock created successfully', stock, 201);
        } catch (error) {
            next(error);
        }
    },
    show: async (req, res, next) => {
        try {
            const stock = await Stock.findById(req.params.id);
            if (!stock) return Response.error(res, 'Stock not found', 404);
            Response.success(res, 'Stock fetched successfully', stock, 200);
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const { name, price, quantity } = req.body;
            const stock = await Stock.findByIdAndUpdate(req.params.id, { name, price, quantity }, { new: true });
            if (!stock) return Response.error(res, 'Stock not found', 404);
            Response.success(res, 'Stock updated successfully', stock, 200);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const stock = await Stock.findByIdAndDelete(req.params.id);
            if (!stock) return Response.error(res, 'Stock not found', 404);
            Response.success(res, 'Stock deleted successfully', stock, 200);
        } catch (error) {
            next(error);
        }
    },
}

export default stockController;
