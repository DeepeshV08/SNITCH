import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

/**
 * Router import
 */
import authRouter from "./routes/auth.routes.js";

/**
 * middlewares used of router
 */
app.use('/api/auth',authRouter)


app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

export default app;
