const API_KEY = "a0fcd007c8d8e25635a0748136932e58";

// const requests = {
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// };

const requests = [
  { category: "Action", url: `/discover/movie?api_key=${API_KEY}&with_genres=28` },
  { category: "Comedy", url: `/discover/movie?api_key=${API_KEY}&with_genres=35` },
  { category: "Horror", url: `/discover/movie?api_key=${API_KEY}&with_genres=27` },
  { category: "Romance", url: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },
  { category: "Documentaries", url: `/discover/movie?api_key=${API_KEY}&with_genres=99` },
  { category: "Netflix Originals", url: `/discover/tv?api_key=${API_KEY}&with_networks=213` },
  { category: "Trending", url: `/trending/all/week?api_key=${API_KEY}&language=en-US` },
  { category: "Top Rated", url: `/movie/top_rated?api_key=${API_KEY}&language=en-US` },
];

export default requests;
