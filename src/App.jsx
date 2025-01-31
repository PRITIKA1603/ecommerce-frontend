import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
import IntroPage from "./components/IntroPage";
import Payment from "./components/Payment"; // Import Payment component

const App = () => {
  const [currentUser, setCurrentUser] = useState(null); // Track logged-in user
  const [registeredUser, setRegisteredUser] = useState(null); // Store registered user info
  const [userProfile, setUserProfile] = useState(null); // Store user details
  const [cart, setCart] = useState([]); // Track cart items
  const [isRegistered, setIsRegistered] = useState(false); // Check if user is registered

  const updateCart = (newCart) => {
    setCart(newCart); // Update cart state
  };

  const handleRegistration = () => {
    setIsRegistered(true); // Set registration state
  };

  const isAuthenticated = currentUser !== null; // Check if user is logged in
  const location = useLocation(); // Hook to get current route
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="app-container">
      {/* Render Header conditionally */}
      {location.pathname !== "/" && location.pathname !== "/register" && location.pathname !== "/login" && location.pathname !== "/userdetails" && (
        <Header currentUser={currentUser} />
      )}

      <main>
        <Routes>
          {/* Intro Page */}
          <Route path="/" element={<IntroPage isRegistered={isRegistered} />} />

          {/* Register Page */}
          <Route
            path="/register"
            element={<Register setRegisteredUser={setRegisteredUser} onRegister={handleRegistration} />}
          />

          {/* Login Page */}
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} registeredUser={registeredUser} />}
          />

          {/* User Details Page */}
          <Route
            path="/userdetails"
            element={
              isAuthenticated ? (
                <UserDetails userProfile={userProfile} setUserProfile={setUserProfile} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Home Page */}
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                userProfile ? (
                  <Home />
                ) : (
                  <Navigate to="/userdetails" replace />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Products Page */}
          <Route
            path="/products"
            element={
              isAuthenticated ? (
                <ProductList cart={cart} updateCart={updateCart} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={
              isAuthenticated ? (
                <CartPage cart={cart} updateCart={updateCart} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Payment Page */}
          <Route
            path="/payment"
            element={
              isAuthenticated ? (
                <Payment cart={cart} updateCart={updateCart} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Redirect any unknown path to "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Render Footer for all pages */}
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
