import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <main style={styles.main}>
      <button onClick={() => navigate('/')} style={styles.backBtn}>
        ← Voltar
      </button>

      <h2 style={styles.heading}>❤️ Meus Favoritos</h2>

      {favorites.length === 0 ? (
        <div style={styles.empty}>
          <p style={styles.emptyIcon}>🎬</p>
          <p style={styles.emptyText}>Você ainda não tem favoritos.</p>
          <button onClick={() => navigate('/')} style={styles.browseBtn}>
            Explorar filmes
          </button>
        </div>
      ) : (
        <div style={styles.grid}>
          {favorites.map((movie) => (
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
  heading: {
    fontSize: '1.5rem',
    marginBottom: '24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 0',
    gap: '16px',
  },
  emptyIcon: {
    fontSize: '4rem',
  },
  emptyText: {
    color: '#aaa',
    fontSize: '1rem',
  },
  browseBtn: {
    marginTop: '8px',
    padding: '10px 24px',
    backgroundColor: '#f5c518',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
};

export default Favorites;