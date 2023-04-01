import { Request, Response } from "express";
import * as Service from "../services/movies.js";
import { failed, success } from "../utils/formatResponse.js";

export const movies = async (_req: Request, res: Response) => {
  try {
    const response = await Service.getMovies();
    return success(res, response.statusCode, response.message)
  } catch (error:any) {
    console.log(error);
   return failed(res, error.statusCode, error.message)
  }
};
