import express, { NextFunction, Request, Response } from "express";
import registerRouters from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT');
    app.use(cors());
    next();
});

registerRouters(app);

export default app;
