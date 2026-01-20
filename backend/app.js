import express from "express";
import userRouter from "./routes/user.route.js";

const app=express()

app.use(express.json());

app.use("/api/auth",userRouter); //base url /api/auth vayo eg:/api/auth/login (kunai pani url chai api ko ho hai vanera denote garna agadi /api rakheko)
export default app;