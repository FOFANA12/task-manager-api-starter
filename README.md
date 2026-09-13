# Task Manager Starter

Squelette d'une API REST de gestion de projets et de tâches, construite avec **Node.js** et **Express**.

La structure et la configuration sont fournies. **Votre travail : compléter les fichiers marqués `TODO`** pour obtenir une API fonctionnelle.

Cette version fonctionne **sans base de données** : les données sont des tableaux en mémoire dans les repositories. Elle sert de base avant l'introduction d'un ORM (Prisma).

## Prérequis

- Node.js 20 ou plus
- npm

## Installation

```bash
git clone <url-du-depot>
cd task-manager-starter
npm install
cp .env.example .env
```

Contenu du `.env` :

```env
APP_PORT=3000
API_VERSION='/api/v1'
```

## Lancer le projet

```bash
# développement (rechargement automatique avec nodemon)
npm run dev

# production
npm start
```

L'API est disponible sur `http://localhost:3000/api/v1`.

Vérifier que ça tourne : `curl http://localhost:3000` doit répondre :

```json
{ "message": "Task Manager API is running", "version": "/api/v1" }
```

## Structure du projet

```
src/
├── server.js          # démarre le serveur                  ✅ fourni
├── app.js             # configuration Express               ✅ fourni
├── routes/
│   ├── index.js       # monte /tasks et /projects            ✅ fourni
│   ├── task.js        # routes CRUD Task                     ✏️ à compléter
│   └── project.js     # routes CRUD Project                  ✏️ à compléter
├── controllers/
│   ├── TaskController.js                                     ✏️ à compléter
│   └── ProjectController.js                                  ✏️ à compléter
├── repositories/
│   ├── TaskRepository.js     # données + findAll() fournis   ✏️ à compléter
│   └── ProjectRepository.js  # données fournies              ✏️ à compléter
└── models/
    ├── Task.js                                               ✅ fourni
    └── Project.js                                            ✅ fourni
```

### Flux d'une requête

```
Requête HTTP → Route → Controller → Repository → Model
                                  ← réponse JSON ←
```

- **Route** : associe une URL et une méthode HTTP à une méthode du controller.
- **Controller** : lit `req.params` / `req.body`, appelle le repository, renvoie la réponse avec le bon code HTTP.
- **Repository** : seul endroit qui manipule les données. C'est lui qui sera remplacé par Prisma.
- **Model** : décrit la forme d'un objet (`Project`, `Task`).

### Convention de nommage

Les controllers suivent le vocabulaire REST, les repositories celui de l'accès aux données (le même que Prisma) :

| Route                | Controller | Repository       |
|----------------------|------------|------------------|
| `GET /tasks`         | `index`    | `findAll()`      |
| `GET /tasks/:id`     | `show`     | `findById(id)`   |
| `POST /tasks`        | `create`   | `create(data)`   |
| `PUT /tasks/:id`     | `update`   | `update(id, data)` |
| `DELETE /tasks/:id`  | `delete`   | `delete(id)`     |

## Ordre de travail conseillé

Chaque `TODO` dans le code indique précisément quoi faire. Suivez cet ordre, et testez avec `curl` (ou Postman / Thunder Client) après chaque étape.

1. **`routes/task.js`** — déclarer les 5 routes.
2. **`repositories/TaskRepository.js`** — `findById`, `create`, `update`, `delete` (`findAll` est fourni).
3. **`controllers/TaskController.js`** — `index`, `show`, `create`, `update`, `delete`.
4. Tester tout le CRUD Task.
5. Refaire la même chose pour **Project** (routes → repository → controller).

> Le repository d'un projet doit inclure ses tâches : filtrer `TaskRepository.tasks` sur `projectId`.

## Endpoints à obtenir

### Projects

| Méthode | URL             | Description                          |
|---------|-----------------|--------------------------------------|
| GET     | `/projects`     | Liste des projets avec leurs tâches  |
| GET     | `/projects/:id` | Détail d'un projet                   |
| POST    | `/projects`     | Créer un projet                      |
| PUT     | `/projects/:id` | Modifier un projet                   |
| DELETE  | `/projects/:id` | Supprimer un projet                  |

Corps attendu pour `POST` / `PUT` :

```json
{
  "name": "Site e-commerce",
  "description": "Développement d'une boutique en ligne",
  "status": "planned",
  "startDate": "2026-10-01",
  "dueDate": "2026-12-15"
}
```

La `reference` (`PRJ-0001`, `PRJ-0002`, …) est générée automatiquement par le repository.

### Tasks

| Méthode | URL          | Description          |
|---------|--------------|----------------------|
| GET     | `/tasks`     | Liste des tâches     |
| GET     | `/tasks/:id` | Détail d'une tâche   |
| POST    | `/tasks`     | Créer une tâche      |
| PUT     | `/tasks/:id` | Modifier une tâche   |
| DELETE  | `/tasks/:id` | Supprimer une tâche  |

Corps attendu pour `POST` / `PUT` :

```json
{
  "title": "Créer les routes API",
  "description": "Créer les endpoints REST",
  "status": "todo",
  "priority": "medium",
  "dueDate": "2026-09-16",
  "projectId": 1
}
```

### Valeurs possibles

| Champ             | Valeurs                                  |
|-------------------|------------------------------------------|
| `Project.status`  | `planned`, `in-progress`, `completed`    |
| `Task.status`     | `todo`, `in-progress`, `completed`       |
| `Task.priority`   | `low`, `medium`, `high`                  |

## Codes de réponse attendus

| Code | Quand                                   |
|------|-----------------------------------------|
| 200  | Lecture, modification ou suppression OK |
| 201  | Création OK                             |
| 500  | Erreur (ex. : ressource introuvable)    |

En cas d'erreur, la réponse contient le message :

```json
{ "error": "Task not found" }
```

## Exemples avec curl

```bash
# lister les projets
curl http://localhost:3000/api/v1/projects

# détail d'une tâche
curl http://localhost:3000/api/v1/tasks/1

# créer une tâche
curl -X POST http://localhost:3000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Ma tâche","priority":"high","projectId":1}'

# modifier une tâche
curl -X PUT http://localhost:3000/api/v1/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Titre modifié","status":"completed","priority":"low","projectId":1}'

# supprimer une tâche
curl -X DELETE http://localhost:3000/api/v1/tasks/3
```

## Dépendances

| Package             | Rôle                                   |
|---------------------|----------------------------------------|
| `express`           | serveur HTTP et routage                |
| `cors`              | autorise les requêtes cross-origin     |
| `morgan`            | log des requêtes dans la console       |
| `dotenv`            | charge les variables du fichier `.env` |
| `http-status-codes` | constantes pour les codes HTTP         |
| `nodemon` (dev)     | redémarre le serveur à chaque modif    |

## Pour aller plus loin (bonus)

Une fois le CRUD terminé, quelques améliorations classiques d'une API, dans l'ordre où on les ferait en cours.

### 1. Route « not found » (404)

Aujourd'hui, une URL inconnue (`GET /api/v1/foo`) renvoie une page HTML d'Express. Une API doit répondre en JSON. On ajoute un middleware **après toutes les routes** dans `app.js` :

```js
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ error: `Route ${req.method} ${req.originalUrl} not found` });
});
```

L'ordre compte : Express exécute les middlewares dans l'ordre de déclaration. Si aucune route n'a répondu avant, celui-ci prend la main.

### 2. Gestion globale des erreurs

Chaque méthode des controllers contient un `try/catch` qui appelle `#handleError`. Cela fonctionne mais se répète. Express propose un **middleware d'erreur** reconnaissable à ses **4 paramètres** `(err, req, res, next)` :

```js
app.use((err, req, res, next) => {
  const status = err.status ?? StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(status).json({ error: err.message });
});
```

Les controllers n'ont alors plus qu'à transmettre l'erreur avec `next(error)` :

```js
show = (req, res, next) => {
  try {
    const task = repository.findById(req.params.id);
    return res.status(StatusCodes.OK).json({ task });
  } catch (error) {
    next(error);
  }
};
```

Pour distinguer un 404 d'un 500, le repository peut attacher un code à l'erreur :

```js
const error = new Error('Task not found');
error.status = StatusCodes.NOT_FOUND;
throw error;
```

Ce middleware se place **en dernier** dans `app.js`, après la route 404.

### 3. Middlewares de validation

Les controllers font confiance au `req.body`. Un `POST /tasks` sans `title` crée une tâche invalide. On ajoute un middleware **avant** le controller dans la route :

```js
// src/middlewares/validateTask.js
export const validateTask = (req, res, next) => {
  const { title, priority } = req.body;

  if (!title) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'title is required' });
  }

  if (priority && !['low', 'medium', 'high'].includes(priority)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'invalid priority' });
  }

  next();
};
```

```js
// src/routes/task.js
taskRouter.post('/', validateTask, controller.create);
taskRouter.put('/:id', validateTask, controller.update);
```

Un middleware reçoit `(req, res, next)` : soit il répond (`res.status(...).json(...)`), soit il passe la main (`next()`). Jamais les deux.

Pour aller plus loin, des bibliothèques comme **zod** ou **express-validator** évitent d'écrire ces règles à la main.

### 4. Autres pistes

| Sujet                      | Pourquoi                                                                 |
|----------------------------|--------------------------------------------------------------------------|
| Supprimer les tâches d'un projet supprimé | sinon `DELETE /projects/1` laisse ses tâches orphelines       |
| `GET /projects/:id/tasks`  | route imbriquée pour lister les tâches d'un projet                       |
| Pagination et filtres      | `GET /tasks?status=todo&page=2`                                          |
| Authentification           | protéger les routes avec un JWT                                          |
| Tests                      | vérifier chaque endpoint automatiquement (Jest + Supertest)              |

## Étape suivante

Remplacer les tableaux en mémoire des repositories par une vraie base de données avec **Prisma**. Seuls les fichiers du dossier `repositories/` devront changer : les routes et les controllers restent identiques.
