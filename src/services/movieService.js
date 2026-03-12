const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export async function fetchPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar filmes populares');
  }

  const data = await response.json();
  return data.results;
}