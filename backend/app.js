import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import uploadRouter from "./routes/upload.route.js";
import cookieParser from "cookie-parser";
import orderRouter from "./routes/order.route.js";


const app=express()

app.use(express.json());
app.use(cookieParser());
app.use("/api/order",orderRouter)
app.use("/api/upload", uploadRouter);


app.use("/api/auth",userRouter); //base url /api/auth vayo eg:/api/auth/login (kunai pani url chai api ko ho hai vanera denote garna agadi /api rakheko)
app.use("/api/products", productRouter);
export default app;