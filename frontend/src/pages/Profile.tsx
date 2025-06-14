import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const initData = WebApp.initData;
    if (initData) {
      try {
        const userData = JSON.parse(initData) as TelegramUser;
        setUser(userData);
      } catch (error) {
        console.error('Ошибка при парсинге данных пользователя:', error);
      }
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {user?.photo_url && (
        <img src={user.photo_url} alt="Аватар" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      )}
      <h2>{user?.first_name || 'Неизвестный пользователь'}</h2>
      {user?.username && <p>@{user.username}</p>}
    </div>
  );
};

export default Profile; 