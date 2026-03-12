import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { IMG_URL } from '../services/movieService';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(movie.id);

  return (
    <div style={styles.card}>
      <div style={styles.posterWrapper} onClick={() => navigate(`/movie/${movie.id}`)}>
        <img
          src={
            movie.poster_path
              ? `${IMG_URL}${movie.poster_path}`
              : 'https://via.placeholder.com/300x450?text=Sem+Poster'
          }
          alt={movie.title}
          style={styles.poster}
        />
        <button
          style={{ ...styles.favBtn, color: fav ? '#f5c518' : '#fff' }}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
          title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {fav ? '★' : '☆'}
        </button>
      </div>
      <div style={styles.info} onClick={() => navigate(`/movie/${movie.id}`)}>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.year}>📅 {movie.release_date?.slice(0, 4)}</p>
        <p style={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #2a2a2a',
    cursor: 'pointer',
  },
  posterWrapper: {
    position: 'relative',
  },
  poster: {
    width: '100%',
    display: 'block',
    aspectRatio: '2/3',
    objectFit: 'cover',
    backgroundColor: '#2a2a2a',
  },
  favBtn: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    background: 'rgba(0,0,0,0.6)',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    padding: '12px',
  },
  title: {
    fontSize: '0.95rem',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  year: {
    fontSize: '0.8rem',
    color: '#aaa',
    marginBottom: '4px',
  },
  rating: {
    fontSize: '0.85rem',
    color: '#f5c518',
  },
};

export default MovieCard;