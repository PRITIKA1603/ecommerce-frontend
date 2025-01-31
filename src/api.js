import axios from "axios";

const API_URL = "http://localhost:5000"; // Update if using a different port

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Add item to cart
export const addToCart = async (product) => {
  try {
    await axios.post(`${API_URL}/cart`, {
      productId: product._id,
      name: product.name,
      price: product.price,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

// Get cart items
export const fetchCart = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

// Remove from cart
export const removeFromCart = async (id) => {
  try {
    await axios.delete(`${API_URL}/cart/${id}`);
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};

// Checkout / Payment
export const processPayment = async () => {
  try {
    await axios.post(`${API_URL}/payment`);
  } catch (error) {
    console.error("Error processing payment:", error);
  }
};
