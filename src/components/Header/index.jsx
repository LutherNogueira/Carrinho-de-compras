import './styles.css';

const Header  = ({showProducts}) => {

    return (
    <div className='header__container'>
      <div className='logo__container'>
        <h1>Logo</h1>
      </div>
      <div className='search__container'>
        <input onChange={(event) => showProducts(event.target.value)} placeholder='Digite aqui sua Pesquisa...'></input>
      </div>
    </div>
  );
};

export default Header;