import { Link } from 'react-router-dom';

function Nav() {
    const userInfo = localStorage.getItem('userInfo');

    const handleLogoff = () => {
        localStorage.removeItem('userInfo'); // Remove apenas o userInfo do localStorage
        window.location.reload(); // Atualiza a página
    };

    return (
        <>
            <header className='menu'>
                <nav className='nav-menu'>
                    <Link to='/'>Home</Link>
                    {userInfo ? (
                        <button onClick={handleLogoff}>Logoff</button>
                    ) : (
                        <Link to='/login'>Faça Login</Link>
                    )}
                </nav>
            </header>
        </>
    );
}

export default Nav;