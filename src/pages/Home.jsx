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
          if (data.length === 0) setError('Nenhum filme encontrado.');
        })
        .catch(() => setError('Erro ao buscar filmes. Tente novamente.'))
        .finally(() => setLoading(false));
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main style={styles.main}>
      <div style={styles.hero}>
        <h2 style={styles.heroTitle}>Descubra seu próximo filme favorito</h2>
        <p style={styles.heroSub}>
          Explore os mais populares ou busque pelo título que quiser.
        </p>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          {query.trim() === '' ? '🔥 Em alta agora' : `Resultados para "${query}"`}
        </h3>

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
      </div>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px 60px',
  },
  hero: {
    padding: '56px 0 40px',
    maxWidth: '560px',
  },
  heroTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '700',
    lineHeight: 1.2,
    marginBottom: '12px',
    letterSpacing: '-0.03em',
  },
  heroSub: {
    color: '#888',
    fontSize: '1rem',
    marginBottom: '28px',
    lineHeight: 1.6,
  },
  section: {
    marginTop: '8px',
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#aaa',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '20px',
  },
};

export default Home;