import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={heroStyle}>
        <h1>Track Your Fitness Journey</h1>
        <p>Log workouts, track progress, and achieve your goals with FitTracker.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/register" style={btnPrimary}>Get Started</Link>
          <Link to="/login" style={btnSecondary}>Login</Link>
        </div>
      </div>
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>Core Features</h2>
        <div style={gridStyle}>
          <div style={cardStyle}><h3>Track Progress</h3><p>Monitor your improvements over time.</p></div>
          <div style={cardStyle}><h3>Custom Workouts</h3><p>Create routines that fit your lifestyle.</p></div>
          <div style={cardStyle}><h3>Stay Motivated</h3><p>Visualize your PRs and journey.</p></div>
        </div>
      </div>
    </div>
  );
};

const heroStyle = { textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f8f9fa' };
const btnPrimary = { backgroundColor: '#007bff', color: 'white', padding: '0.75rem 2rem', borderRadius: '5px', textDecoration: 'none' };
const btnSecondary = { border: '2px solid #007bff', color: '#007bff', padding: '0.75rem 2rem', borderRadius: '5px', textDecoration: 'none' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '2rem auto' };
const cardStyle = { padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };

export default Home;