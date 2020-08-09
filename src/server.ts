import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


//req -> cabeçalho e corpo;
//res -> api pra frontend;
//Express n entende json, por isso express.json;
//Corpo (Request Body) Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar;
// Query Params: Paginação, filtros, ordenação