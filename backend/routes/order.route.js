import express from "express";
import { addOrder,getOrders,getMyOrders,getOrderById,payOrders,deliverOrders } from "../controllers/order.controller.js";
import checkAuth from "../middleware/checkauth.middleware.js";
import checkAdmin from "../middleware/checkadmin.middleware.js";


const router = express.Router();

router.post("/", checkAuth, addOrder);
router.get("/",checkAuth,checkAdmin, getOrders);
router.get("/myorders",checkAuth,getMyOrders);
router.get("/myorders",checkAuth,getOrderById);
router.put("/:id/pay",checkAuth, payOrders);
router.put("/:id/deliver", checkAuth,checkAdmin,deliverOrders);


export default router;