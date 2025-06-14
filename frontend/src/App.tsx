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
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 10px 24px 10px', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6', position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 100 }}>
            <Link to="/"><svg width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M10.707 2.293a1 1 0 0 1 1.414 0l9 9A1 1 0 0 1 20 13h-1v7a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-4h-2v4a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-7H4a1 1 0 0 1-.707-1.707l9-9z"/></svg></Link>
            <Link to="/catalog"><svg width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg></Link>
            <Link to="/video"><svg width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4z"/></svg></Link>
            <Link to="/cart"><svg width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332l1.334-8H5.999l1.335 8zM21 6h-2.42l-1.72-3.447A1 1 0 0 0 16 2H8a1 1 0 0 0-.86.493L5.42 6H3a1 1 0 1 0 0 2h1l1.6 9.2A3 3 0 0 0 8.5 20h7a3 3 0 0 0 2.9-2.8L21 8h1a1 1 0 1 0 0-2z"/></svg></Link>
            <Link to="/profile"><svg width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg></Link>
          </div>
        </div>
      </Router>
    </TelegramProvider>
  );
};

export default App; 