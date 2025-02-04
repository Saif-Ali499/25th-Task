import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Features/productSlice'; 
import "../App.css";
function ProductDiv() {
  console.log("in Product div");
  const dispatch = useDispatch();
  const productArray = useSelector(state => state.productArray);
  
  return (
    <div id="products">
      {productArray.map((product) => (
        <div key={product.id} className="productCard"> 
          <img className="sImg" src={product.image} alt={product.name} /> 
          <div className="productInfo">
            <p className="Name">{product.name}</p>
            <p className="Price">
              <strong>Price: ${product.price}</strong>
            </p>
            <button
              className="Add"
              onClick={() => dispatch(addToCart(product))}
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDiv;
