import {Link} from 'react-router-dom'

function Nav(){

    return(
        <>
            <header className='menu'>
                <nav className='nav-menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Faça Login</Link>
                </nav>
            </header>
        </>
    )
}

export default Nav