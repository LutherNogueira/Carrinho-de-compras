import './styles.css';

import ProductCart from '../ProductCart'

const Cart  = ({currentSale}) => {

    return (
    <div className='cart__container'>
          <div className='cart__product__container'>
            {currentSale.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))}
          </div>
    </div>
  );
};

export default Cart;