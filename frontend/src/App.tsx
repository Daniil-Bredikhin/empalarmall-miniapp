import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelegramProvider } from './components/TelegramProvider';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <TelegramProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<div>Каталог</div>} />
          <Route path="/cart" element={<div>Корзина</div>} />
          <Route path="/profile" element={<div>Профиль</div>} />
        </Routes>
      </Router>
    </TelegramProvider>
  );
};

export default App; 