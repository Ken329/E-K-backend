import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { authentication } from './middleware/authenticationHandlers';
import loginRouter from './routes/loginRoute';
import memoRouter from './routes/memoRoute';
import memoryRouter from './routes/memoryRoute';
import reminderRouter from './routes/reminderRoute';
import storyboardRouter from './routes/storyboardRoute';
import todoRouter from './routes/todoRoute';

dotenv.config();

const app = express();

app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', loginRouter);

app.all('*', authentication);

app.use('/api', memoRouter);
app.use('/api', todoRouter);
app.use('/api', reminderRouter);
app.use('/api', memoryRouter);
app.use('/api', storyboardRouter);

app.listen(process.env.PORT || 8080, () =>
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${process.env.PORT || 8080}`)
);
