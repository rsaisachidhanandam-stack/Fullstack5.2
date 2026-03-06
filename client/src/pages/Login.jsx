import { Link } from 'react-router-dom';

const Login = () => (
  <div style={formWrapper}>
    <div style={formCard}>
      <h2>Login</h2>
      <p>Sign in to your account</p>
      <div style={placeholder}>Login form placeholder (Coming Soon)</div>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  </div>
);

const formWrapper = { minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const formCard = { maxWidth: '400px', width: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' };
const placeholder = { backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '5px', margin: '1rem 0' };

export default Login;