import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link
        to='/'
        className='logo'
      >
        MyBlog
      </Link>
      <nav>
        <Link to='/entrar'>Entrar</Link>
        <Link to='/registrar'>Registrar</Link>
      </nav>
    </header>
  );
};

export default Header;
