import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>CRUD de Ninjas</h2>
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
