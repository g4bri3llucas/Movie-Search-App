import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function Navbar() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title} onClick={() => navigate('/')}>
        🎬 Movie Search App
      </h1>
      <button onClick={() => navigate('/favorites')} style={styles.favBtn}>
        ❤️ Favoritos
        {favorites.length > 0 && (
          <span style={styles.badge}>{favorites.length}</span>
        )}
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#1a1a1a',
    padding: '16px 32px',
    borderBottom: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
  },
  favBtn: {
    background: 'none',
    border: '1px solid #444',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  badge: {
    backgroundColor: '#f5c518',
    color: '#000',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
};

export default Navbar;