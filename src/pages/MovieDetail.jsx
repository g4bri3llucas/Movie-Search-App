import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService';

const IMG_URL_LARGE = 'https://image.tmdb.org/t/p/w500';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <p style={styles.loading}>Carregando...</p>;
  }

  return (
    <main style={styles.main}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        ← Voltar
      </button>

      <div style={styles.content}>
        <img
          src={
            movie.poster_path
              ? `${IMG_URL_LARGE}${movie.poster_path}`
              : 'https://via.placeholder.com/300x450?text=Sem+Poster'
          }
          alt={movie.title}
          style={styles.poster}
        />

        <div style={styles.info}>
          <h1 style={styles.title}>{movie.title}</h1>

          <div style={styles.meta}>
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>📅 {movie.release_date?.slice(0, 4)}</span>
          </div>

          <div style={styles.genres}>
            {movie.genres?.map((genre) => (
              <span key={genre.id} style={styles.genre}>
                {genre.name}
              </span>
            ))}
          </div>

          <h3 style={styles.overviewTitle}>Sinopse</h3>
          <p style={styles.overview}>
            {movie.overview || 'Sinopse não disponível.'}
          </p>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    padding: '40px 32px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  loading: {
    padding: '40px',
    color: '#aaa',
    textAlign: 'center',
  },
  backBtn: {
    background: 'none',
    border: '1px solid #444',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '32px',
    fontSize: '0.9rem',
  },
  content: {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start',
  },
  poster: {
    width: '280px',
    minWidth: '280px',
    borderRadius: '10px',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  meta: {
    display: 'flex',
    gap: '24px',
    marginBottom: '16px',
    fontSize: '1rem',
    color: '#f5c518',
  },
  genres: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px',
  },
  genre: {
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '0.8rem',
    color: '#ccc',
  },
  overviewTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#aaa',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  overview: {
    color: '#ccc',
    lineHeight: 1.8,
    fontSize: '0.95rem',
  },
};

export default MovieDetail;