function SearchBar({ value, onChange }) {
  return (
    <div style={styles.wrapper}>
      <span style={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
      {value && (
        <button style={styles.clear} onClick={() => onChange('')}>
          ✕
        </button>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    maxWidth: '520px',
    marginBottom: '36px',
  },
  icon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1rem',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '13px 44px',
    fontSize: '0.95rem',
    borderRadius: '12px',
    border: '1px solid #2a2a2a',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  },
  clear: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: '0.9rem',
    cursor: 'pointer',
    padding: '4px',
  },
};

export default SearchBar;