import express from "express"

import userRoutes from "../../main/routes/user"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);



export default app;
