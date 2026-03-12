function SearchBar({ value, onChange }) {
  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="🔍 Buscar filmes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    marginBottom: '32px',
  },
  input: {
    width: '100%',
    maxWidth: '500px',
    padding: '12px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #333',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    outline: 'none',
  },
};

export default SearchBar;