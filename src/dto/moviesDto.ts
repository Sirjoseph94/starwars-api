import { Comment } from "@prisma/client";
import db from "../config/dbConfig.js";

export const allMoviesDTO = async (obj: Record<string, any>) => {
  const moviesIds = obj.results.map((film: { url: string }) =>
    film.url.charAt(film.url.length - 2)
  );

  const movieObject = await obj.results.map((film: Record<string, any>) => {
    return {
      movieTitle: film.title,
      releaseDate: film.release_date,
      openingCrawl: film.opening_crawl,
      // comments_count:
    };
  });
  return await movieObject;
};

export const movieDTO = async (film: any, comment: Record<string, any>) => {
  return {
    movie_title: film.title,
    release_date: film.release_date,
    opening_crawl: film.opening_crawl,
    comments: comment.message,
  };
};
