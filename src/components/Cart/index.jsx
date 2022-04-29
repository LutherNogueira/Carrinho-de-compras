import './styles.css';

import ProductCart from '../ProductCart'

const Cart  = ({currentSale}) => {

    return (
    <div>
          <div>
            {currentSale.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))}
          </div>
    </div>
  );
};

export default Cart;