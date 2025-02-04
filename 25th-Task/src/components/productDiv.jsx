import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Features/productSlice'; 
// Make sure to import addToCart from your slice
import "../App.css";
function ProductDiv() {
  console.log("in Product div");
  const dispatch = useDispatch();
  const productArray = useSelector(state => state.productArray);
   // Adjust path if needed (state.productArray => state.ECom.productArray)

  return (
    <div id="products">
      {productArray.map((product) => (
        <div key={product.id} className="productCard"> {/* Apply key here to the outer div */}
          <img className="sImg" src={product.image} alt={product.name} /> {/* Update alt text to be more descriptive */}
          <div className="productInfo">
            <p className="Name">{product.name}</p>
            <p className="Price">
              <strong>Price: ${product.price}</strong>
            </p>
            <button
              className="Add"
              onClick={() => dispatch(addToCart(product))}// Dispatching the action
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDiv;
