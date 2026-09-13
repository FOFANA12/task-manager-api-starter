// Configuration de l'application Express : middlewares globaux + montage des routes.
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import "dotenv/config";

const { API_VERSION } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Route de contrôle : permet de vérifier que le serveur répond
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running", version: API_VERSION });
});

// Toutes les routes de l'API sont préfixées par API_VERSION (ex. : /api/v1)
app.use(API_VERSION, appRouter);

// TODO (bonus, voir README) : middleware 404 pour les routes inconnues
// TODO (bonus, voir README) : middleware global de gestion des erreurs

export default app;
