import { Router } from "express";

const route = Router();

route.get("/", Controller.comments);

export default route;
