import { Router } from "express";
import * as Controller from "../controllers/movies.js"

const route = Router();

route.get("/", Controller.movies)

export default route