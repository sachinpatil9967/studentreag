import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Student Portal</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            Welcome to the next generation of learning.
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
