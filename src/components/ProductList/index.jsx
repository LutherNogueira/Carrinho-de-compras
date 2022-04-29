import "./styles.css";
import Product from "../Product";

const ProductList  = ({products, filteredProducts, handleClick}) => {

    return (
      <>
      {filteredProducts.length === 0
        ? products.map((item) => (
            <Product product={item} handleClick={handleClick} key={item.code} />
          ))
        : filteredProducts.map((item) => (
            <Product product={item} handleClick={handleClick} key={item.code} />
          ))}
      </>    
  );
};

export default ProductList ;