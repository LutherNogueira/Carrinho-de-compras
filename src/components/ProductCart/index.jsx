import './styles.css'

const ProductCart = ({ product }) => {

    return(
        <div>
            <h4>{product.name}</h4>
            <p>Preço: R$ {product.discount}</p>
        </div>
    )

    
}

export default ProductCart;