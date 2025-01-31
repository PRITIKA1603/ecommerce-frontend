import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productData = {
  Electronics: [
    { id: 1, name: "Laptop", price: 999.99, stock: 10, image: "/images/Laptop.jpeg" },
    { id: 2, name: "Smartphone", price: 699.99, stock: 15, image: "/images/Smartphone.jpeg" },
    { id: 3, name: "Headphones", price: 199.99, stock: 20, image: "/images/Headphones.jpeg" },
    { id: 4, name: "Smartwatch", price: 299.99, stock: 5, image: "/images/Smartwatch.jpeg" },
    { id: 5, name: "Tablet", price: 499.99, stock: 8, image: "/images/Tablet.webp" },
    { id: 6, name: "Camera", price: 499.99, stock: 12, image: "/images/Camera.jpeg" },
    { id: 7, name: "Bluetooth Speaker", price: 49.99, stock: 25, image: "/images/Bluetoooth speaker.jpeg" },
    { id: 8, name: "Airpods", price: 199.99, stock: 7, image: "/images/Airpods.jpeg" },
    { id: 9, name: "Keyboard", price: 29.99, stock: 50, image: "/images/Keyboard.jpeg" },
    { id: 10, name: "Mouse", price: 19.99, stock: 30, image: "/images/Mouse.jpeg" },
  ],
  Clothing: [
    { id: 1, name: "T-Shirt", price: 19.99, stock: 40, image: "/images/T-shirt.jpeg" },
    { id: 2, name: "Jeans", price: 39.99, stock: 35, image: "/images/jeans.jpeg" },
    { id: 3, name: "Jacket", price: 79.99, stock: 10, image: "/images/Jacket.jpeg" },
    { id: 4, name: "Maxi Dress", price: 59.99, stock: 20, image: "/images/Maxi dress.jpeg" },
    { id: 5, name: "Shoes", price: 49.99, stock: 18, image: "/images/Shoes.jpeg" },
    { id: 6, name: "Cap", price: 14.99, stock: 50, image: "/images/Cap.jpeg" },
    { id: 7, name: "Scarf", price: 29.99, stock: 15, image: "/images/Scarf.jpeg" },
    { id: 8, name: "Shorts", price: 29.99, stock: 30, image: "/images/Shorts.jpeg" },
    { id: 9, name: "Skirt", price: 39.99, stock: 12, image: "/images/Skirt.jpeg" },
    { id: 10, name: "Socks", price: 9.99, stock: 60, image: "/images/Socks.jpeg" },
  ],
  Furniture: [
    { id: 1, name: "Chair", price: 49.99, stock: 20, image: "/images/chair.jpeg" },
    { id: 2, name: "Table", price: 99.99, stock: 10, image: "/images/table.jpeg" },
    { id: 3, name: "Sofa", price: 299.99, stock: 5, image: "/images/sofa.jpeg" },
    { id: 4, name: "Bed", price: 499.99, stock: 7, image: "/images/bed.jpeg" },
    { id: 5, name: "Bookshelf", price: 129.99, stock: 8, image: "/images/Bookshelf.jpeg" },
    { id: 6, name: "Dining Set", price: 699.99, stock: 3, image: "/images/Dining set.jpeg" },
    { id: 7, name: "Wardrobe", price: 199.99, stock: 4, image: "/images/Wardrobe.jpeg" },
    { id: 8, name: "Stool", price: 19.99, stock: 50, image: "/images/Stool.webp" },
    { id: 9, name: "Desk", price: 89.99, stock: 6, image: "/images/Desk.jpeg" },
    { id: 10, name: "TV Stand", price: 59.99, stock: 9, image: "/images/Tv stand.jpeg" },
],
Grocery: [
    { id: 1, name: "Milk", price: 2.99, stock: 100, image: "/images/milk.jpeg" },
    { id: 2, name: "Chocolate", price: 3.49, stock: 80, image: "/images/chocolate.jpeg" },
    { id: 3, name: "Bread", price: 1.99, stock: 50, image: "/images/bread.jpeg" },
    { id: 4, name: "Rice (5kg)", price: 19.99, stock: 20, image: "/images/rice.jpeg" },
    { id: 5, name: "Pasta", price: 2.49, stock: 40, image: "/images/pasta.jpeg" },
    { id: 6, name: "Cooking Oil", price: 7.99, stock: 30, image: "/images/oil.jpeg" },
    { id: 7, name: "Sugar (1kg)", price: 2.49, stock: 50, image: "/images/sugar.jpeg" },
    { id: 8, name: "Salt", price: 0.99, stock: 70, image: "/images/salt.jpeg" },
    { id: 9, name: "Coffee", price: 4.99, stock: 25, image: "/images/coffee.jpeg" },
    { id: 10, name: "Tea", price: 3.99, stock: 35, image: "/images/tea.jpeg" },
],
Cosmetics: [
    { id: 1, name: "Lipstick", price: 9.99, stock: 30, image: "/images/lipstick.jpeg" },
    { id: 2, name: "Foundation", price: 14.99, stock: 20, image: "/images/foundation.jpeg" },
    { id: 3, name: "Mascara", price: 12.99, stock: 15, image: "/images/mascara.jpeg" },
    { id: 4, name: "Eyeliner", price: 8.99, stock: 25, image: "/images/eyeliner.png" },
    { id: 5, name: "Blush", price: 10.99, stock: 18, image: "/images/blush.jpeg" },
    { id: 6, name: "Nail Polish", price: 4.99, stock: 50, image: "/images/nail polish.jpeg" },
    { id: 7, name: "Perfume", price: 49.99, stock: 10, image: "/images/perfume.jpeg" },
    { id: 8, name: "Face Wash", price: 7.99, stock: 30, image: "/images/face wash.jpeg" },
    { id: 9, name: "Moisturizer", price: 15.99, stock: 12, image: "/images/moisturizer.jpeg" },
    { id: 10, name: "Shampoo", price: 9.99, stock: 25, image: "/images/shampoo.jpeg" },
],
Stationery: [
    { id: 1, name: "Notebook", price: 3.99, stock: 50, image: "/images/notebook.webp" },
    { id: 2, name: "Pen Pack", price: 2.99, stock: 100, image: "/images/Pen.jpeg" },
    { id: 3, name: "Pencil", price: 0.99, stock: 150, image: "/images/pencil.jpeg" },
    { id: 4, name: "Eraser", price: 0.49, stock: 200, image: "/images/eraser.jpeg" },
    { id: 5, name: "Marker", price: 1.99, stock: 80, image: "/images/marker.jpeg" },
    { id: 6, name: "Sticky Notes", price: 4.99, stock: 60, image: "/images/sticky notes.jpeg" },
    { id: 7, name: "Ruler", price: 1.49, stock: 100, image: "/images/scale.jpeg" },
    { id: 8, name: "Highlighter", price: 2.49, stock: 120, image: "/images/highlighter.jpeg" },
    { id: 9, name: "Sharpener", price: 1.19, stock: 150, image: "/images/sharpener.jpeg" },
    { id: 10, name: "Folder", price: 2.49, stock: 70, image: "/images/folder.jpeg" },
]
};

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const addToCart = (product) => {
    if (product.stock > 0) {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        setCart((prevCart) => [
          ...prevCart,
          { ...product, qty: 1, status: 'Pending' },
        ]);
      }
      product.stock--;
      alert(`${product.name} added to the cart!`);
    } else {
      alert(`${product.name} is out of stock!`);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.stock > item.qty
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? productData[selectedCategory].filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleProceedToPayment = () => {
    if (cart.length > 0) {
      navigate('/payment'); // Navigate to the payment page
    } else {
      alert('Your cart is empty. Please add items to the cart.');
    }
  };

  return (
    <div className="product-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="categories">
        <h2>Select a Category</h2>
        {Object.keys(productData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products">
        {selectedCategory ? (
          <>
            <h2>{selectedCategory} Products</h2>
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Stock: {product.stock}</p>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.stock <= 0}
                    >
                      {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                ))
              ) : (
                <p>No products match your search.</p>
              )}
            </div>
          </>
        ) : (
          <p>Please select a category to view products.</p>
        )}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span> - ${item.price.toFixed(2)} x{' '}
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  {item.qty}
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            <button onClick={handleProceedToPayment}>Proceed to Payment</button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;