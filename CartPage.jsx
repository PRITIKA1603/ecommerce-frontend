import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  // Sync with localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        let newQuantity =
          action === "increase" ? item.quantity + 1 : item.quantity - 1;
        if (newQuantity < 1) newQuantity = 1; // Ensure minimum quantity is 1
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleProceedToPayment = () => {
    if (cartItems.length > 0) {
      navigate("/payment");
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, "increase")}
                  >
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button
            className="proceed-btn"
            onClick={handleProceedToPayment}
            disabled={cartItems.length === 0}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
