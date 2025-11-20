# Django + React Authentication Project

A simple authentication system with Django backend and React frontend.

## Project Structure

```
django again/
├── Auth/                   # Django project
│   ├── Auth/              # Django settings and configuration
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── views.py
│   └── manage.py
├── my-react-app/          # React frontend
│   └── src/
│       └── App.tsx
└── venv/                  # Python virtual environment
```

## Features

- User login and logout
- Session-based authentication
- CORS-enabled API
- React frontend with TypeScript

## Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

## Backend Setup (Django)

### 1. Create and activate virtual environment

Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

Mac/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

### 2. Install dependencies

```bash
pip install django django-cors-headers
```

### 3. Run migrations

```bash
cd Auth
python manage.py migrate
```

### 4. Start Django server

```bash
python manage.py runserver
```

The backend will run on http://localhost:8000

## Frontend Setup (React)

### 1. Navigate to React app directory

```bash
cd my-react-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The frontend will typically run on http://localhost:5173 (Vite) or http://localhost:3000 (Create React App)

## Usage

### Test Credentials

Username: test
Password: test123

Username: new
Password: pass123

### Login Flow

1. Open the React app in your browser
2. Enter username and password
3. Click Login
4. Upon successful login, you will see "You are logged in"
5. Click Logout to end the session

## API Endpoints

### POST /api/login/

Login endpoint

Request body:
```json
{
  "username": "test",
  "password": "test123"
}
```

Response (success):
```json
{
  "message": "Welcome test"
}
```

Response (failure):
```json
{
  "message": "Invalid username or password"
}
```

### GET /api/logout/

Logout endpoint

Response:
```json
{
  "message": "Logged out"
}
```

## Configuration

### CORS Settings

The Django backend is configured to accept requests from:
- http://localhost:5173 (Vite default)
- http://localhost:3000 (Create React App default)

To add more origins, edit `Auth/Auth/settings.py`:

```python
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://your-domain.com',
]
```

### Session Configuration

Sessions are configured for cross-origin requests with the following settings:
- SESSION_COOKIE_SAMESITE = 'None'
- SESSION_COOKIE_SECURE = False (set to True for HTTPS)
- CORS_ALLOW_CREDENTIALS = True

## Troubleshooting

### 403 Forbidden Error

The views are decorated with @csrf_exempt to allow API requests without CSRF tokens. If you still get 403 errors, check that:
- Django server is running
- CORS middleware is properly configured
- Frontend is using the correct API URL

### 500 Internal Server Error

If you see "no such table: django_session", run migrations:
```bash
python manage.py migrate
```

### CORS Errors

Ensure django-cors-headers is installed and configured in settings.py:
```bash
pip install django-cors-headers
```

Check that 'corsheaders' is in INSTALLED_APPS and CorsMiddleware is at the top of MIDDLEWARE.

### Connection Refused

Make sure both servers are running:
- Django: python manage.py runserver (port 8000)
- React: npm run dev (port 5173 or 3000)

## Security Notes

This is a development setup. For production:
- Use environment variables for SECRET_KEY
- Set DEBUG = False
- Configure ALLOWED_HOSTS
- Set SESSION_COOKIE_SECURE = True
- Use HTTPS
- Implement proper user authentication with Django's built-in auth system
- Add password hashing
- Remove hardcoded credentials

## Technologies Used

### Backend
- Django 5.2.8
- django-cors-headers
- SQLite (default database)

### Frontend
- React
- TypeScript
- Vite (or Create React App)

## License

This project is for educational purposes.

