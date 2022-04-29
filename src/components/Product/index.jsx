import './styles.css';

const Product = ({product,handleClick }) => {

    return (
      <div className='card__container'>
        <div className='card__header'>
          <img className='card__img' alt={product.name} src={product.img}/>
        </div>      
        <div className='card__body'>
          <h3 className='card__name' >{product.name}</h3>
          <p className='card__category'>{product.description}</p>
          <span className='card__price'>R$ {product.price}</span>
          <span className='card__price__discount'>R$ {product.discount}</span>
          <button onClick={() => handleClick(product.code)}>Adicionar ao Carrinho</button>
          </div>       
      </div>
  );
};

export default Product;