import express, {Request} from 'express';
import dotenv from 'dotenv';
import httpErrorHandlers from "http-errors-express"
import Routes from "./routes/index";
import {notFound} from "./middlewares";

dotenv.config({
    path: ".env",
});

const app = express();

app.use('/api/mail', Routes)

app.use(notFound);
app.use(httpErrorHandlers({
    formatError: (err,_req: Request, _isExposed) => {
        return {
            result: false,
            error: {
                name: err.message,
                status: err.code,
                message: err.data,
                stack: err.stack,
            }
        };
    }
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server is running on port ',PORT);
});