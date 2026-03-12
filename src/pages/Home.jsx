function Home() {
  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>Filmes Populares</h2>
      <p style={styles.sub}>Em breve os filmes aparecerão aqui.</p>
    </main>
  );
}

const styles = {
  main: {
    padding: '40px 32px',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '8px',
  },
  sub: {
    color: '#888',
  },
};

export default Home;