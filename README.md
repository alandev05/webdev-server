# webdev-server

Node.js / Express HTTP server for the Kambaz application (Chapter 5).

```bash
npm install
npm run dev     # nodemon --exec tsx index.ts  (port 4000)
npm start       # tsx index.ts
```

Create a `.env` (not committed):

```
SERVER_ENV=development
CLIENT_URL=http://localhost:3000
SERVER_URL=http://localhost:4000
SESSION_SECRET=<a phrase>
```

`CLIENT_URL` may list several origins separated by commas.

- `Hello.ts`: `/` and `/hello`
- `Lab5/`: Lab 5 exercises under `/lab5/...`
- `Kambaz/`: in-memory Database plus DAOs and routes for users, courses,
  modules, assignments, and enrollments under `/api/...`
