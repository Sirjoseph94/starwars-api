import db from "../config/dbConfig.js";

export const allMoviesDTO = async (obj: Record<string, any>) => {
  // Map films from API
  const movieObject = await obj.results.map((film: Record<string, any>) => {
    return {
      movieTitle: film.title,
      releaseDate: film.release_date,
      openingCrawl: film.opening_crawl,
      filmId: +film.url.charAt(film.url.length - 2),
    };
  });

  //add comments count to movie object
  const res = await movieObject.reduce(async (total: any, current: any) => {
    let count = await db.comment.count({ where: { filmId: current.filmId } });
    current.commentsCount = count;
     (await total).push(current);
     return total
  }, []);
  console.log(await res);

  return await res;
};

export const movieDTO = async (film: any, comment: Record<string, any>) => {
  return {
    movie_title: film.title,
    release_date: film.release_date,
    opening_crawl: film.opening_crawl,
    comments: comment.message,
  };
};
