export const createUser = (req, res) => {
    const { name, email } = req.body;
    // Aqui você pode adicionar lógica para salvar o usuário no banco de dados
    res.status(200).json({ message: 'Usuário criado com sucesso', user: { name, email } });
}

export const getAllUsers = (req, res) => {
    // Aqui você pode adicionar lógica para buscar os usuários no banco de dados
    const users = [
        { id: 1, name: 'João', email: 'joao@example.com' },
        { id: 2, name: 'Maria', email: 'maria@example.com' }
    ];
    res.status(200).json({ users });
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    // Aqui você pode adicionar lógica para deletar o usuário do banco de dados
    res.status(200).json({ message: `Usuário com id ${id} deletado com sucesso` });
}