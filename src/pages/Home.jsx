import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { fetchPopularMovies, searchMovies } from '../services/movieService';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function loadPopular() {
    setLoading(true);
    setError(null);
    fetchPopularMovies()
      .then((data) => setMovies(data))
      .catch(() => setError('Não foi possível carregar os filmes. Tente novamente.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (query.trim() === '') {
      loadPopular();
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      setError(null);
      searchMovies(query)
        .then((data) => {
          setMovies(data);
          if (data.length === 0) setError('Nenhum filme encontrado para essa busca.');
        })
        .catch(() => setError('Erro ao buscar filmes. Tente novamente.'))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>🎬 Filmes Populares</h2>
      <SearchBar value={query} onChange={setQuery} />

      {loading && <Loading />}

      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={query.trim() === '' ? loadPopular : null}
        />
      )}

      {!loading && !error && (
        <div style={styles.grid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    padding: '40px 32px',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
  },
};

export default Home;