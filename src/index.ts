import express from "express";
import helmet from "helmet";
import cors from "cors"

import CONFIG from "./config/index.js";

const PORT = CONFIG.PORT;
const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use((_req, res) =>
  res
    .status(404)
    .json({ status: "Not Found", message: "This route does not exist" })
);

app.listen(PORT, () => {
  console.log(`Server live at PORT: ${PORT} 🚀`);
});
