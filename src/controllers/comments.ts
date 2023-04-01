import { Request, Response } from "express";
import { commentsType } from "../utils/validationSchemas.js";
import { failed, success } from "../utils/formatResponse.js";
import { newComment } from "../services/comments.js";

export const addComment = async (req: Request, res: Response) => {
 try {
   const payload: commentsType = req.body;
   const ipAddress = req.ip;
   const data = { ...payload, ipAddress };
   console.log(data)
   const response = await newComment(data);
   return success(res, response.statusCode, response.message)
 } catch (error:any) {
  console.error(error)
  return failed(res, error.statusCode, error.message)
 }
 
}