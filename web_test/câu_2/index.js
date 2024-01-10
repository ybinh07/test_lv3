import express from "express"
import morgan from "morgan"
import { config } from "dotenv";
import cors from "cors";
import { database } from "./Database/database.js";
import { userRoute } from "./Route/userRoute.js";
database.run();

const app = express()
app.use(express.json());
const PORT = 3000
config();

app.use(morgan('combined'))
app.use(cors())

app.use("/user",userRoute)
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })