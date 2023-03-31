import { Router } from "express";

const route = Router();

route.get("/", Controller.character);

export default route;
