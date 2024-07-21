import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;
const filePath = 'D:/ProdList/data/user.json';

app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const newUser = req.body;
    newUser.Type = "User"; // Adiciona o campo Type com o valor "User"

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo de usuários.');
            return;
        }

        const users = JSON.parse(data.toString());
        // Encontra o maior ID atual no array de usuários e incrementa
        const maxId = users.users.reduce((max, user) => Math.max(max, parseInt(user.ID)), 0);
        newUser.ID = (maxId + 1).toString(); // Atribui um novo ID ao newUser
        users.users.push(newUser); // Adiciona o newUser ao array de usuários

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                res.status(500).send('Erro ao salvar o usuário.');
                return;
            }

            res.status(200).send({ message: 'Usuário cadastrado com sucesso!' });
        });
    });
});

app.post('/login', (req, res) => {
    const { User, Email, Password } = req.body;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo de usuários.');
            return;
        }

        const users = JSON.parse(data.toString());
        const user = users.users.find(u => (u.User === User || u.Email === Email) && u.Password === Password);

        if (user) {
            // Cria uma cópia do usuário sem o ID e Password para retornar
            const { ID, Password, ...userInfo } = user;
            res.status(200).json(userInfo);
        } else {
            res.status(401).send('Usuário ou senha inválidos.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});