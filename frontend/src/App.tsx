import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TelegramProvider } from './components/TelegramProvider';
import Home from './pages/Home';
import { FaHome, FaList, FaVideo, FaShoppingCart, FaUser } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <TelegramProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<div>Каталог</div>} />
              <Route path="/video" element={<div>Видео</div>} />
              <Route path="/cart" element={<div>Корзина</div>} />
              <Route path="/profile" element={<div>Профиль</div>} />
            </Routes>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
            <Link to="/"><span>🏠</span></Link>
            <Link to="/catalog"><span>📋</span></Link>
            <Link to="/video"><span>🎥</span></Link>
            <Link to="/cart"><span>🛒</span></Link>
            <Link to="/profile"><span>👤</span></Link>
          </div>
        </div>
      </Router>
    </TelegramProvider>
  );
};

export default App; 