import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [showForm, setShowForm] = useState('signup');

    const handleShowSignUp = () => setShowForm('signup');
    const handleShowLogin = () => setShowForm('login');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('http://localhost:3000/signup', data);
            console.log(response.data.message); // Mensagem de sucesso
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <>
            <button onClick={handleShowSignUp}>Fazer cadastro</button>
            <button onClick={handleShowLogin}>Entre</button>
            {showForm === 'signup' && (
                <form id='signup-form' onSubmit={handleSubmit}>
                    <input name="UserName" type="text" placeholder="Nome Completo" />
                    <input name="Email" type="email" placeholder="Email" />
                    <input name="User" type="text" placeholder="Usuário" />
                    <input name="Password" type="password" placeholder="Senha" />
                    <button type="submit">Cadastrar</button>
                </form>
            )}
            {showForm === 'login' && (
                <form id='login-form'>
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            )}
        </>
    );
}

export default Login;