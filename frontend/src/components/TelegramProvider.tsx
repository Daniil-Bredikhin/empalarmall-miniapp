import React, { createContext, useContext, useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

interface TelegramContextType {
  webApp: typeof WebApp;
  isReady: boolean;
}

const TelegramContext = createContext<TelegramContextType>({
  webApp: WebApp,
  isReady: false,
});

export const useTelegram = () => useContext(TelegramContext);

export const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Инициализация Telegram WebApp
    WebApp.ready();
    WebApp.expand();
    setIsReady(true);

    // Настройка темы
    document.documentElement.style.setProperty('--tg-theme-bg-color', WebApp.themeParams.bg_color);
    document.documentElement.style.setProperty('--tg-theme-text-color', WebApp.themeParams.text_color);
    document.documentElement.style.setProperty('--tg-theme-hint-color', WebApp.themeParams.hint_color);
    document.documentElement.style.setProperty('--tg-theme-link-color', WebApp.themeParams.link_color);
    document.documentElement.style.setProperty('--tg-theme-button-color', WebApp.themeParams.button_color);
    document.documentElement.style.setProperty('--tg-theme-button-text-color', WebApp.themeParams.button_text_color);
  }, []);

  return (
    <TelegramContext.Provider value={{ webApp: WebApp, isReady }}>
      {children}
    </TelegramContext.Provider>
  );
}; 