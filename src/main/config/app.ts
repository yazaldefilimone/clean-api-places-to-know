import express from "express"

import userRoutes from "@/main/routes/user"
import placeRoutes from "@/main/routes/place"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(placeRoutes);



export {app}
