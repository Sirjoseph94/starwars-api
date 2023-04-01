import db from "../config/dbConfig.js"

type newComment = {
    ipAddress: string;
    filmId: number;
    text: string;
}

export const newComment = async(payload: newComment)=>{
  try {
    const response =  await db.comment.create({
      data: {
        ipAddress: payload.ipAddress,
        text: payload.text,
        filmId: payload.filmId
      }
    })
    return {statusCode: 201, message: response}
  } catch (error) {
    console.error(error)
    throw { statusCode: 500, message: error };
  }
}

export const getComments =async (filmId:number) => {
  try {
    const comments = await db.comment.findMany({
      where:{
        filmId
      }
    })
    return {statusCode: 200, message: comments}
  } catch (error) {
     console.error(error);
     throw { statusCode: 500, message: error };
  }
}