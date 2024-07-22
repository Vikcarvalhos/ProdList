# ProdList

ProdList é uma aplicação web que tem como objetivo cadastrar e listar produtos.

## Funcionalidades

- Cadastro de Itens Manual;
- Cadastro de Multiplos Itens Através de Planilha Modelo;
- Remoção de Itens Utilizando Conta de Administrador;
- Cadastro de Usuários Sem Permissão de Remoção.

## Conta de Administrador

A conta de administrador possibilitará remover os produtos da API apartir da Home, clicando no botão do card do produto.

Usuário: administrator
Senha: prodlistadmin

## Instalação dos Requisitos

Para executar o projeto ProdList, você precisará instalar os requisitos para React, JavaScript e Python.

### Requisitos do React

Para instalar os requisitos do React, você precisará ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Após a instalação, navegue até a pasta do projeto React e execute o seguinte comando:

```bash
npm install
```

Para instalar os requisitos do JavaScript, assegure-se de que o Node.js e o npm estão instalados. Em seguida, navegue até a pasta do servidor JavaScript e execute o seguinte comando para instalar as dependências listadas no arquivo requirementsjs.txt:

```bash
npm install $(cat requirementsJS.txt)
```

Para instalar os requisitos do Python, você precisará ter o Python e o pip (Python Package Installer) instalados. Navegue até a pasta do servidor Python e execute o seguinte comando para instalar as dependências listadas no arquivo requirementspy.txt:

```bash
pip install -r requirementspy.txt
```

## Iniciando os Servidores Locais

Agora, para rodar o projeto na sua máquina, você precisará abrir 3 terminais para executar os servidores do React, JavaScript e Python.

### Servidor do React

Para iniciar o servidor do React, execute o seguinte comando:

```bash
npm run dev
```

### Servidor do Javascript

Para iniciar o servidor do Javascript, navegue até a o caminho em que o server.js está e execute o seguinte comando:

```bash
node server.js
```

### Servidor do Python

Para iniciar o servidor do Python, navegue até a o caminho em que o server.py está e execute o seguinte comando:

```bash
python server.py
```