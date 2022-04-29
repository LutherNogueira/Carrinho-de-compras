import './styles.css';

import React, { useState } from 'react';


const FromProduct  = ({products,setPoducts}) => {

    const [newProduct, setNewProduct] = useState({
        code: '',
        name: '',
        description: '',
        price: '',
        discount: ''
      });

    const handleChange = (event) => {
        const { newProduct } = event.target;
        console.log(newProduct);
        setNewProduct({ ...newProduct});
        console.log(newProduct);
      }

    const handleAddProduct = (event) => {
        event.preventDefault();
        setPoducts([
        ...products,
        {
            code: newProduct.code,
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            discount: newProduct.discount
        }
        ]);
	}

    return (
    <div>
        <form onSubmit={handleAddProduct}>
            <div>
                <input
                    name="code"
                    label='Código'
                    onChange={handleChange}
                />
                <input
                    name="name"
                    label='Nome'
                    onChange={handleChange}
                />
                <input
                    name="description"
                    label='Descrição'
                    onChange={handleChange}
                />
                <input
                    name="price"
                    label='Preço'
                    onChange={handleChange}
                />
                <input
                    name="discount"
                    label='Preço com Desconto'
                    onChange={handleChange}
                />
                <div>
                    <button type='submit'>Cadastrar</button>
                </div>
            </div>

        </form>

    </div>
  );
};

export default FromProduct;