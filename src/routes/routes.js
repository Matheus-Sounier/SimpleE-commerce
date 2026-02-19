// Importa o módulo express para criar rotas e lidar com requisições HTTP.
import express from 'express';

// Importa a função createUser do arquivo userController.js, que é responsável por lidar com a lógica de criação de usuários.
import { createUser, getAllUsers, deleteUser } from '../controllers/userController.js';

const router = express.Router(); // Cria um roteador usando o método Router do Express, que permite definir rotas para a aplicação de forma modularizada.

// Define as rotas para a aplicação, associando cada rota a uma função específica do controlador de usuários.

router.post('/cadastro', createUser); // Rota para criar um novo usuário
router.get('/todos', getAllUsers); // Rota para obter todos os usuários
router.delete('/deletar/:id', deleteUser); // Rota para deletar um usuário específico por ID

export default router; // Exporta o roteador para que ele possa ser utilizado em outros arquivos, como o server.js, onde as rotas serão integradas ao servidor Express.