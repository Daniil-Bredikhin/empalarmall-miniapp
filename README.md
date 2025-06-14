# EMPALAR MALL - Telegram Mini App

## Структура проекта

```
.
├── backend/           # Backend на Go
├── frontend/         # Frontend на React + TypeScript
└── sql/             # SQL скрипты для базы данных
```

## Настройка Backend

1. Установите Go 1.21 или выше
2. Установите PostgreSQL 14 или выше
3. Установите Redis
4. Создайте файл `.env` в директории `backend` со следующим содержимым:
   ```
   # Server
   SERVER_PORT=8080

   # Database
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=empalarmall
   DB_PASSWORD=empalarmall123
   DB_NAME=empalarmall
   DB_SSLMODE=disable

   # Redis
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=
   REDIS_DB=0

   # Telegram
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_WEBHOOK_URL=https://your-domain.com/webhook
   ```

5. Запустите сервер:
   ```bash
   cd backend
   go run cmd/api/main.go
   ```

## Настройка Frontend

1. Установите Node.js 18 или выше
2. Создайте файл `.env` в директории `frontend` со следующим содержимым:
   ```
   REACT_APP_API_URL=http://localhost:8080
   REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token_here
   ```

3. Установите зависимости:
   ```bash
   cd frontend
   npm install
   ```

4. Запустите приложение:
   ```bash
   npm start
   ```

## Разработка

### Backend

- `cmd/api/main.go` - точка входа в приложение
- `internal/` - основной код приложения
  - `config/` - конфигурация
  - `handlers/` - HTTP обработчики
  - `middleware/` - middleware компоненты
  - `models/` - модели данных
  - `repository/` - слой работы с базой данных
  - `services/` - бизнес-логика
  - `utils/` - вспомогательные функции
- `pkg/` - переиспользуемые пакеты
  - `database/` - работа с PostgreSQL
  - `redis/` - работа с Redis
  - `telegram/` - интеграция с Telegram

### Frontend

- `src/` - исходный код
  - `components/` - React компоненты
  - `hooks/` - React хуки
  - `pages/` - страницы приложения
  - `services/` - API сервисы
  - `store/` - управление состоянием
  - `styles/` - стили
  - `utils/` - вспомогательные функции

## Требования

- Go 1.21+
- Node.js 18+
- PostgreSQL 15+
- Redis 7+

## Установка и запуск

### Backend

```bash
cd backend
go mod download
go run main.go
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### База данных

```bash
cd sql
psql -U postgres -f init.sql
```

## Конфигурация

Все конфигурационные файлы находятся в соответствующих директориях:
- `backend/config/`
- `frontend/.env`
- `sql/config/` 