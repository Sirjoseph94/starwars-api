import moviesDto from "../dto/moviesDto.js";
import apiCall from "../utils/apiCall.js";

export const getMovies = async () => {
  try {
    const resp = await apiCall("films");
    const moviesList = await moviesDto(resp)
    // const data = addCommentsCount(moviesList)
    return {statusCode: 200, message: moviesList}
  } catch (error) {
    console.error(error);
    throw {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
};
