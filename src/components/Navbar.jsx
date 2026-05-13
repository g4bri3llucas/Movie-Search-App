import { useNavigate, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites } = useFavorites();

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title} onClick={() => navigate('/')}>
        🎬 Movie<span style={styles.highlight}>Search</span>
      </h1>
      <div style={styles.links}>
        <button
          onClick={() => navigate('/')}
          style={{
            ...styles.link,
            color: location.pathname === '/' ? '#f5c518' : '#aaa',
          }}
        >
          Início
        </button>
        <button
          onClick={() => navigate('/favorites')}
          style={{
            ...styles.link,
            color: location.pathname === '/favorites' ? '#f5c518' : '#aaa',
          }}
        >
          ❤️ Favoritos
          {favorites.length > 0 && (
            <span style={styles.badge}>{favorites.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#111',
    padding: '0 32px',
    height: '64px',
    borderBottom: '1px solid #222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#fff',
    cursor: 'pointer',
    letterSpacing: '-0.02em',
  },
  highlight: {
    color: '#f5c518',
  },
  links: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  link: {
    background: 'none',
    border: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '8px 14px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background 0.2s',
  },
  badge: {
    backgroundColor: '#f5c518',
    color: '#000',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem',
    fontWeight: '700',
  },
};

export default Navbar;