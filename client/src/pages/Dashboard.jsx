const Dashboard = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Dashboard</h1>
      <p>Welcome back, Ak!</p>
      <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
        <h2>Your Fitness Stats</h2>
        <ul>
          <li>Recent Workouts: Leg Day, Upper Body</li>
          <li>Current Streak: 5 Days</li>
          <li>Next Goal: 100kg Squat</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;