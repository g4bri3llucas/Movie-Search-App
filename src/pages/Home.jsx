import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchPopularMovies, searchMovies } from '../services/movieService';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim() === '') {
      fetchPopularMovies().then((data) => setMovies(data));
      return;
    }

    const timer = setTimeout(() => {
      searchMovies(query).then((data) => setMovies(data));
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>🎬 Filmes Populares</h2>
      <SearchBar value={query} onChange={setQuery} />
      <div style={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
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