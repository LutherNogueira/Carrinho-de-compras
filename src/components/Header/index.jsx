import './styles.css';
import Logo from '../../assets/img/logo.svg';

const Header  = ({showProducts}) => {

    return (
      <div className='header__container'>
        <div className='logo__container'>
          <h1>Logo</h1>
      </div>
      <div className='search__container'>
        <input onChange={(event) => showProducts(event.target.value)} placeholder='Digitar Pesquisa'></input>
        <button className='btn__search'>Pesquisar</button>
      </div>
    </div>
  );
};

export default Header;