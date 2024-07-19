const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota para receber dados do formulário de cadastro e enviá-los para a API
app.post('/signup', async (req, res) => {
    try {
    
        const response = await axios.post('http://localhost:5000/users', req.body);
        res.status(200).json({ message: 'Usuário cadastrado com sucesso!', data: response.data });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});