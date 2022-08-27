import express, {Express} from "express";
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
import UserRoutes from "./routes/User";
app.use('/api/user', UserRoutes);


app.use(notFound);
app.use(
    httpErrorHandler({
        formatError: (err, _req, _isExposed) => {
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