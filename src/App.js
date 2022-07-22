import express, { json } from 'express';
var cors = require('cors');
import morgan from 'morgan';
import sequelize from './Database/Database';

const app = express();
const api = '/api/v1';

app.use(morgan('dev'));
app.use(cors());
app.use(json());


import TestModel from './Models/Test.models';
import TestRoutes from './Routes/Test.route';

app.use(`${api}/test`, TestRoutes);

async function buildDb(){
    await sequelize.sync({force:true});
  }
  
   //buildDb();

export default app;