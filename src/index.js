import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, { sequelize } from './models';
import routes from './routes';
import seed   from './models/seed/seed-db';
const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    //me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

// Routes

app.use('/user-session', routes.user_session);
app.use('/users', routes.user);
app.use('/speakers', routes.speaker);
app.use('/sessions', routes.session);

// Start

const eraseDatabaseOnSync = false;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    seed.insert();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

 