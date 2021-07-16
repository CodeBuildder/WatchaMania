const API_KEY = "726068409170de3e64ca758c5fa130c9";

const apiRequest = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

console.log(apiRequest.fetchActionMovies);
export default apiRequest;
