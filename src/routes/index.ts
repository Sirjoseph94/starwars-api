import { Router } from "express";
import moviesRoute from "./moviesRoute.js"
import commentsRoute from "./commentsRoute.js"
import characterRoute from "./charactersRoute.js"

const Routes = (app: Router)=>{
  app.use("api/v1/movies", moviesRoute)
  app.use("api/v1/comments", commentsRoute)
  app.use("api/v1/character", characterRoute)
}

export default Routes