function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>🎬 Movie Search App</h1>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#1a1a1a',
    padding: '16px 32px',
    borderBottom: '1px solid #333',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#fff',
  },
};

export default Navbar;