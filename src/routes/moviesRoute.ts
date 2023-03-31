import { Router } from "express";

const route = Router();

route.get("/", Controller.movies)

export default route