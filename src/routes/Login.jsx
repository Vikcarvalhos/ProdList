import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [showForm, setShowForm] = useState('signup');

    const handleShowSignUp = () => setShowForm('signup');
    const handleShowLogin = () => setShowForm('login');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('http://localhost:3000/signup', data);
            console.log(response.data.message);
            form.reset();
            window.location.reload(); // Atualiza a página após o cadastro
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('http://localhost:3000/login', data);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            console.log('Login bem-sucedido');
            window.location.href = '/'; // Redireciona para a Home após o login
        } catch (error) {
            console.error('Erro ao realizar login:', error);
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
                <form id='login-form' onSubmit={handleLogin}>
                    <input name="User" type="text" placeholder="Usuário ou Email" />
                    <input name="Password" type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            )}
        </>
    );
}

export default Login;