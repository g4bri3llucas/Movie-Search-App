import MovieCard from '../components/MovieCard';

const mockMovies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    release_date: '2024-03-01',
    vote_average: 8.5,
    poster_path: '/czembiqeu16lfmvmj0o5brvil8.jpg',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    release_date: '2023-07-21',
    vote_average: 8.9,
    poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  },
  {
    id: 3,
    title: 'Poor Things',
    release_date: '2023-12-08',
    vote_average: 8.0,
    poster_path: '/kCGlIMHnOm8JPXIbpGraham9skSJ.jpg',
  },
  {
    id: 4,
    title: 'Past Lives',
    release_date: '2023-06-02',
    vote_average: 8.1,
    poster_path: '/k3waqVXSnämnäljbMgPGC7KGkBO.jpg',
  },
  {
    id: 5,
    title: 'Killers of the Flower Moon',
    release_date: '2023-10-20',
    vote_average: 7.8,
    poster_path: '/dB6ZpFVS7acH7P3bnHrReKMnVlm.jpg',
  },
  {
    id: 6,
    title: 'Blade Runner 2049',
    release_date: '2017-10-06',
    vote_average: 7.9,
    poster_path: '/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
  },
];

function Home() {
  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>🎬 Filmes Populares</h2>
      <div style={styles.grid}>
        {mockMovies.map((movie) => (
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