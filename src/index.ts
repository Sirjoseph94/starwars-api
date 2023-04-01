import express from "express";
import helmet from "helmet";
import cors from "cors"
import logger from "morgan"
import compression from "compression"

import CONFIG from "./config/index.js";
import Routes from "./routes/index.js"
import { errorHandler } from "./middlewares/errorHandler.js";

const PORT = CONFIG.PORT;
const app = express();

app.use(cors())
app.use(helmet())
app.use(logger("dev"))
app.use(express.json())
app.use(compression())
app.use(express.urlencoded({extended: true}))

Routes(app)

app.get("/", (_req, res)=>{
  res.status(200).send("<h1>Welcome to Starwars API.</h1>")
})
//Return 404 error
app.use((_req, res) =>
  res
    .status(404)
    .json({ status: "Not Found", message: "This route does not exist" })
);

app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server live at PORT: ${PORT} 🚀`);
});
