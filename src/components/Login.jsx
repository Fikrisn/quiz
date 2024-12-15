import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    localStorage.setItem('username', username);
    onLogin(username);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <p style={styles.subtitle}>Please enter your name to continue</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
    opacity: 0.2,
  },
  card: {
    backgroundColor: 'white',
    padding: '30px 40px',
    borderRadius: '12px',
    boxShadow: '0px 10px 20px rgba(155, 155, 155, 0.2)',
    textAlign: 'center',
    maxWidth: '350px',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  title: {
    marginBottom: '10px',
    fontSize: '26px',
    color: '#333333',
  },
  subtitle: {
    marginBottom: '20px',
    fontSize: '14px',
    color: '#777777',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '6px',
    border: '1px solid #dddddd',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#667eea',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#5a67d8',
    transform: 'scale(1.05)',
  },
};

export default Login;
