import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const IntroPage = () => {
  return (
    <motion.div
      className="intro-container"
      style={{
        backgroundImage: "url('/images/updated bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", // Prevents image tiling
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        position: "relative", // Allows absolute positioning inside the container
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Add Google Fonts import directly in JSX */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
      />
      {/* Content */}
      <motion.h1
        className="welcome-animation"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          color: "black",
          textAlign: "center",
          paddingTop: "20vh",
          fontSize: "4rem", // Increased font size
          fontWeight: "bold",
        }}
      >
        <span
          className="fraktur-text"
          style={{
            fontFamily: "'Roboto Mono', monospace", // Apply the Fraktur font directly
            animation: "textEffect 2s ease-in-out infinite",
            color: "#6c5ce7", // A vibrant color for the text
          }}
        >
          𝕮𝖆𝖗𝖙𝖈𝖗𝖆𝖟𝖊
        </span>
      </motion.h1>
      <motion.p
        className="intro-subtitle"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "2rem",
        }}
      >
        Discover the best products at amazing prices!
      </motion.p>
      <div className="intro-buttons" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/register"
            className="btn"
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#6c5ce7",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Let's Get Started
          </Link>
        </motion.div>
      </div>
      {/* Add the animation style directly in JSX */}
      <style>{`
        @keyframes textEffect {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};
export default IntroPage;
