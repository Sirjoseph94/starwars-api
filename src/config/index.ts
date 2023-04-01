import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  PORT: Number(process.env.PORT) || 7000,
  API_BASE_URL: process.env.API_URL,
};
export default CONFIG;
