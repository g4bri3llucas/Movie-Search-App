function Loading() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner} />
      <p style={styles.text}>Carregando...</p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 0',
    gap: '16px',
  },
  spinner: {
    width: '48px',
    height: '48px',
    border: '4px solid #333',
    borderTop: '4px solid #f5c518',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  text: {
    color: '#aaa',
    fontSize: '0.95rem',
  },
};

export default Loading;