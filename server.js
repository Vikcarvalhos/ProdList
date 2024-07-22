import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;
const filePath = './data/user.json';
const productsFilePath = './data/product.json';

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

app.get('/products', (req, res) => {
    fs.readFile('./data/product.json', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo de produtos.');
            return;
        }

        const products = JSON.parse(data.toString());
        res.json(products);
    });
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    newProduct.Visibility = "Enabled"; // Adiciona o campo Visibility com o valor "Enabled"

    fs.readFile('./data/product.json', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo de produtos.');
            return;
        }

        const products = JSON.parse(data.toString());
        // Encontra o maior ID atual no array de produtos e incrementa
        const maxId = products.products.reduce((max, product) => Math.max(max, parseInt(product.ID)), 0);
        newProduct.ID = (maxId + 1).toString(); // Atribui um novo ID ao newProduct
        products.products.push(newProduct); // Adiciona o newProduct ao array de produtos

        fs.writeFile('./data/product.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                res.status(500).send('Erro ao salvar o produto.');
                return;
            }

            res.status(200).send({ message: 'Produto cadastrado com sucesso!' });
        });
    });
});

function getProducts() {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data).products;
}

// Função para salvar os produtos atualizados no arquivo
function saveProducts(products) {
    const data = JSON.stringify({ products }, null, 2);
    fs.writeFileSync(productsFilePath, data);
}

// Rota para remover um produto pelo ID
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const products = getProducts();
    const productIndex = products.findIndex(product => product.ID === id);

    if (productIndex !== -1) {
        // Remove o produto encontrado
        products.splice(productIndex, 1);
        saveProducts(products); // Salva a lista atualizada de produtos no arquivo
        res.json({ message: `Produto com ID ${id} removido com sucesso.` });
    } else {
        res.status(404).json({ message: 'Produto não encontrado.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});