import express, {Express, Request} from "express";
import http from "http";
import httpErrorHandler from "http-errors-express";

//Middlewares
import { notFound } from "./middlewares";

import dotenv from "dotenv";
dotenv.config({
    path: ".env"
})

const app: Express = express();
app.use(express.json());


//Routes
import UserRouter from "./routes/UserRouter";
app.use('/api/user', UserRouter);

import MessageRouter from "./routes/MessageRouter";
app.use('/api/chats', MessageRouter);


app.use(notFound);
app.use(
    httpErrorHandler({
        formatError: (err, _req: Request, _isExposed) => {
            return {
                result: false,
                error: {
                    name: err.message,
                    status: err.code,
                    message: err.data,
                    stack: err.stack,
                }
            };
        },
    })
);

const PORT: string | number = process.env.PORT || 3000;

http.createServer(app).listen(PORT, ()=>{
    console.log(`Server service-user is running on port 3000`);
});