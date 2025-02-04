import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Features/productSlice.js"; 
import { Link } from 'react-router'
function CartDiv() {
  console.log("in cart");
  const cart = useSelector((state) => state.cart);
  const totalCost = useSelector((state) => state.totalCost);
  const dispatch = useDispatch();

  return (
    <div id="cart">
      <h1>
        <strong>CART</strong>
      </h1>
      <div className="cartItemsCard">
        {cart.length > 0 ? (
          cart.map((item) =>           
              <div className="itemWraper" key={item.id}>
                <div className="itemImgs">
                  <img className="itemImg" src={item.image} alt={item.name} />
                </div>
                <div className="ItemDetails">
                  <div className="itemDetails">{item.title}</div>
                  <div className="itemDetails">-</div>
                  <div className="itemDetails">Price- ${item.price}</div>
                </div>
                <div className="grid gap-1 content-center p-5">
                  <button
                    className="h-auto w-15 text-xl font-bold mx-10 rounded-2xl bg-green-700"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    ++
                  </button>
                  <div>Qty: {item.quantity}</div>
                  <button
                    className="h-auto w-15 text-xl font-bold mx-10 rounded-2xl bg-red-700"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    --
                  </button>
                </div>
              </div>
          )
        ) : (
          <div>Add Items to Cart</div>
        )}
      </div>
      <div id="totalCost" className="w-full">
        Grand Total = ${totalCost}
          <div className="placeOrder">
          <Link to="Order">Proceed to Pay</Link>
        </div>
      </div>
    </div>
  );
}

export default CartDiv;
