import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a2a6c',
      color: '#fff',
      fontSize: '2rem',
      textAlign: 'center',
      padding: '3rem'
    }}>
      <div>
        <h1 style={{color: '#ff1744', fontSize: '3rem', marginBottom: '1.5rem'}}>disable</h1>
      </div>
    </div>
  );
}

export default App;