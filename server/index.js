import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/user.js';
import heroRoutes from './routes/hero.js';
import statsRouter from './routes/stats.js';
import itemRouter from './routes/item.js';
import itemInUseRouter from './routes/itemInUse.js';
import skillsRouter from './routes/skills.js';
import skillsInBattleRouter from './routes/skillsInBattle.js';
import missionsRouter from './routes/missions.js';
import tradeRouter from './routes/trades.js';
import inventoryRouter from './routes/inventory.js';


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/user', userRoutes);
app.use('/hero', heroRoutes);
app.use('/stats', statsRouter);
app.use('/item', itemRouter);
app.use('/itemInUse', itemInUseRouter);
app.use('/skills', skillsRouter);
app.use('/skillsInBattle', skillsInBattleRouter);
app.use('/missions', missionsRouter);
app.use('/trade', tradeRouter);
app.use('/inventory', inventoryRouter);
app.use('/', (req, res) => {
  res.send('Hello Worlds1');
})



const CONECTION_URL = 'mongodb+srv://jstutorial:jstutorial123@cluster0.aby6a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 7215;

mongoose.connect(CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);