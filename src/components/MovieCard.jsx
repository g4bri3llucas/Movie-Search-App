import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { IMG_URL } from '../services/movieService';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(movie.id);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fade-in"
      style={{
        ...styles.card,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 12px 40px rgba(0,0,0,0.6)'
          : '0 2px 8px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
        <div style={{
          ...styles.overlay,
          opacity: hovered ? 1 : 0,
        }}>
          <span style={styles.viewBtn}>Ver detalhes</span>
        </div>
        <button
          style={{
            ...styles.favBtn,
            color: fav ? '#f5c518' : '#fff',
            opacity: hovered || fav ? 1 : 0.6,
          }}
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
        <div style={styles.meta}>
          <span style={styles.year}>{movie.release_date?.slice(0, 4)}</span>
          <span style={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #2a2a2a',
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  posterWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    display: 'block',
    aspectRatio: '2/3',
    objectFit: 'cover',
    backgroundColor: '#2a2a2a',
    transition: 'transform 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.25s ease',
  },
  viewBtn: {
    backgroundColor: '#f5c518',
    color: '#000',
    padding: '8px 18px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
  },
  favBtn: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    background: 'rgba(0,0,0,0.65)',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.2s, opacity 0.2s',
  },
  info: {
    padding: '12px',
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '6px',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  year: {
    fontSize: '0.78rem',
    color: '#666',
  },
  rating: {
    fontSize: '0.82rem',
    color: '#f5c518',
    fontWeight: '600',
  },
};

export default MovieCard;