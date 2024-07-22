import { Link } from 'react-router-dom';
import { IoLogInSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import logoBlack from '../assets/img/PLLogo.svg';
import logoWhite from '../assets/img/PLLogoW.svg'
import '../css/nav.css'

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
                    <div className='nav-link-container'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='nav-logo-container'>
                        <Link to='/'><img className='nav-logo' src={logoWhite}/></Link>
                    </div>
                    <div className='nav-user-container'>
                        {userInfo ? (
                            <button className='user-log' onClick={handleLogoff}>Logoff <CiLogout/></button>
                        ) : (
                            <Link className='user-log' to='/login'>Faça Login <IoLogInSharp/></Link>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Nav;