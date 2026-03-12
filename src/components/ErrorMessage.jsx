function ErrorMessage({ message, onRetry }) {
  return (
    <div style={styles.wrapper}>
      <p style={styles.icon}>⚠️</p>
      <p style={styles.message}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} style={styles.btn}>
          Tentar novamente
        </button>
      )}
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
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
  },
  message: {
    color: '#aaa',
    fontSize: '1rem',
    maxWidth: '400px',
  },
  btn: {
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

export default ErrorMessage;