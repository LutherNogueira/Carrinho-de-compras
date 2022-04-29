import "./styles.css";
import Product from "../Product";

const ProductList  = ({products, filteredProducts, handleClick}) => {

    return (
      <>
      {filteredProducts.length > 0
        ? filteredProducts.map((item) => (
            <Product product={item} handleClick={handleClick} key={item.id} />
          ))
        : products.map((item) => (
            <Product product={item} handleClick={handleClick} key={item.id} />
          ))}
      </>    
  );
};

export default ProductList ;