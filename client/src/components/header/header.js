import { AiFillDelete, AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h2 className="titleHeader">Crud de Ninjas</h2>
      <Link to={'/'}>
        <IoMdAdd size={30} color="#FFF" />
      </Link>
      <Link to={'/listingPage'}>
        <AiOutlineSearch size={30} color="#FFF" />
      </Link>
    </header>
  );
};

export default Header;
