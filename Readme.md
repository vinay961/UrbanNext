# UrbanNext

Full-stack marketplace for booking spaces (React + Node/Express + MongoDB).  
Includes Google authentication, Redux state for auth, space listings, bookings and simple admin/client dashboards.

## Features
- Google OAuth sign-in (stores user profile in DB)
- Redux Toolkit for auth state (loginStart / loginSuccess / loginFailure / logout)
- Space listings (create / read / update / delete)
- Bookings referencing users and spaces
- Client and admin dashboard UIs
- Tailwind + React + react-icons for UI

## Tech stack
- Frontend: React, React Router, Redux Toolkit, Tailwind CSS, react-icons
- Backend: Node.js, Express, Mongoose (MongoDB)
- Auth: Google OAuth (OpenID Connect), sessions / JWT (project-specific)
- DB: MongoDB

## Repo layout
- /Frontend — React app
- /Backend — Express API, Mongoose models
- Readme and project configs at root

## Quick start

Prerequisites:
- Node.js (16+)
- MongoDB (local or Atlas)
- Google Cloud OAuth client (for Google Sign-In)

1. Backend
   - cd Backend
   - cp .env.example .env (create if not present)
   - npm install
   - npm run dev   # or `node index.js` / `npm start` depending on scripts

2. Frontend
   - cd Frontend
   - cp .env.example .env (create if needed)
   - npm install
   - npm start

Defaults:
- Frontend runs on http://localhost:3000
- Backend runs on http://localhost:5000 (update .env and frontend API base as required)

## Important environment variables (examples)

Backend (.env)
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/urban-next
PORT=5000
JWT_SECRET=your_jwt_secret_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=http://localhost:3000
```

Frontend (.env or REACT_APP_*)
```
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_API_BASE=http://localhost:5000/api
```

## Google OAuth setup
1. Create OAuth 2.0 Client ID in Google Cloud Console.
2. Add authorized origins and redirect URIs (e.g., http://localhost:3000).
3. Use the client ID in the frontend Google sign-in library and send token/credential to backend for verification.
4. On backend verify token, find or create a User in DB, then issue session/JWT and respond with user data.

## Models (overview)
- Space (example)
  - title, location, price, type, available, image
- User (recommended)
  - googleId, name, email, image, role
- Booking (recommended)
  - space (ref Space), user (ref User), message, date, status

Note: Space.model.js exists in Backend/src/Models and should be referenced by Booking and other controllers.

## API (typical endpoints)
- POST /api/auth/google — verify Google credential, create/find user, return token/session
- GET /api/spaces — list spaces
- GET /api/spaces/:id — get space
- POST /api/spaces — create space (auth/role protected)
- PUT /api/spaces/:id — update space
- DELETE /api/spaces/:id — delete space
- POST /api/bookings — create a booking (include authenticated user id)
- GET /api/bookings — get bookings (admin/client filtered)

Adjust endpoints to match your backend implementation.

## Redux notes (authSlice)
- Slice initial state:
  - { user: null, role: null, loading: null, error: null }
- Actions created by createSlice: loginStart, loginSuccess, loginFailure, logout
- Dispatch loginSuccess({ user, role }) after successful auth to persist in Redux
- Access user in components with:
```js
const user = useSelector(state => state.auth.user);
const role = useSelector(state => state.auth.role);
```

## How to show who sent a booking
- Save booking with user reference (user id) on creation
- When returning bookings use Mongoose `.populate('user')` to include user name/email for client view

## Deployment tips
- Build frontend (npm run build) and serve static files from backend or deploy separately (Netlify/Vercel + Heroku/Render)
- Use managed MongoDB (Atlas) and secure environment variables
- For production, use HTTPS and restrict Google OAuth origins

## Contributing
- Create issues for bugs/features
- PRs should include tests where appropriate and update docs
