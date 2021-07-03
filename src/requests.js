export const API_KEY = "a0fcd007c8d8e25635a0748136932e58";

const requests = [
  { category: "Netflix Originals", url: `/discover/tv?api_key=${API_KEY}&with_networks=213` },
  { category: "Comedy", url: `/discover/movie?api_key=${API_KEY}&with_genres=35` },
  { category: "Horror", url: `/discover/movie?api_key=${API_KEY}&with_genres=27` },
  { category: "Romance", url: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },
  { category: "Documentaries", url: `/discover/movie?api_key=${API_KEY}&with_genres=99` },
  { category: "Trending", url: `/trending/all/week?api_key=${API_KEY}&language=en-US` },
  { category: "Top Rated", url: `/movie/top_rated?api_key=${API_KEY}&language=en-US` },
];

export default requests;
