import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 7001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server live at PORT: ${PORT}`);
});
