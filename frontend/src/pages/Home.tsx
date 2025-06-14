import React from 'react';
import { useTelegram } from '../components/TelegramProvider';

const Home: React.FC = () => {
  const { webApp } = useTelegram();

  const handleClick = () => {
    webApp.showAlert('Привет из Telegram Mini App!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>EMPALAR MALL</h1>
      <p>Добро пожаловать в наш магазин!</p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: 'var(--tg-theme-button-color)',
          color: 'var(--tg-theme-button-text-color)',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Нажми меня
      </button>
    </div>
  );
};

export default Home; 