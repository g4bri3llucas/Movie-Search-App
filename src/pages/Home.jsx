import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../services/movieService';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((data) => setMovies(data));
  }, []);

  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>🎬 Filmes Populares</h2>
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