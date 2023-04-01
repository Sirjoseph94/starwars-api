import { Router } from "express";
import * as Controller from "../controllers/comments.js"
import validate from "../middlewares/validation.js";
import { commentsSchema } from "../utils/validationSchemas.js";

const route = Router();

route.post("/", validate(commentsSchema), Controller.addComment);

export default route;
