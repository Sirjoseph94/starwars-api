const moviesDto = async (obj: any) => {

  const moviesIds = obj.results.map((film: { url: string; }) => film.url.charAt(film.url.length-2))
console.log(moviesIds)

  const movieObject = await obj.results.map((film: any) => {
    return {
      movie_title: film.title,
      release_date: film.release_date,
      opening_crawl: film.opening_crawl,
    };
  });
  return await movieObject;
};

export default moviesDto;
