import express from "express";

import { PORT } from "./config/env.js"
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongoDb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workFlowRouter from "./routes/workflow.routes.js";

const app = express();
app.use(express.json()); // allows app to send request in JSON data
app.use(express.urlencoded({ extended: false })); // data html forms in simple format
app.use(cookieParser()); // reads cookies from incoming requests
app.use(arcjetMiddleware);


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/workflows', workFlowRouter);


app.use(errorMiddleware);


app.get("/", (req, res) => {
 res.send("Welcome to Subscription tracker");
});

app.listen(PORT, async() => {
    console.log(`Listening on port http://localhost:${ PORT }`);

    await connectToDatabase();
})

export default app;