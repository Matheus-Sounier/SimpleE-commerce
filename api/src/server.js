// importa o express sendo um framework para Node.js usado para criar servidores web e APIs. Fornecendo uma estrutura robusta e flexível para lidar com rotas, requisições e respostas HTTP.
import express, { Router } from 'express';

import userRoutes from './routes/routes.js'; // Importa as rotas de usuários do arquivo routes.js
import productRoutes from './routes/routes.js'; // Importa as rotas de produtos do arquivo routes.js

// Toda vez que eu quiser usar o express, basta chamar o 'app'
const app = express(); 


// O método 'use' é usado para configurar o middleware do Express. */
app.use(express.json());


// Serve para inicializar o server, se o server tiver fucionando, ele vai mostrar a mensagem 'Servidor rodando na porta 3000'
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
// Para verificar se o server estar rodando, no terminal digite 'node src/server.js' e depois acesse 'http://localhost:3000'

app.use('/usuarios', userRoutes); // Rota para usuários
app.use('/produtos', productRoutes); // Rota para produtos

// O método 'get' é usado para definir uma rota GET para o caminho '/' (raiz do site). Quando um cliente fizer uma solicitação GET para essa rota, a função de callback será executada.
app.get('/', (req, res) => {
    res.send('Tá criado o servidor, mas ainda não tem nada aqui');
});
