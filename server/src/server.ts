import express from 'express';
import routes from './routes';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

// Biblioteca para lidar com requisições http
const app = express();

// Usando plugin para o express interpretar dados no formato JSON
app.use(express.json());

// Permitindo o acesso a api de diferentes pontos
app.use(cors());

// Servindo rotas da api
app.use(routes);

// Exibindo logs da aplicação
app.use(morgan('dev'));

// Servindo um caminho estático para acesso a imagens no servidor
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Servindo a aplicação na porta 3333
app.listen(3333, () => console.log('Running server on port: 3333'));