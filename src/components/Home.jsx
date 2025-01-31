import React from 'react';
import ProductList from './ProductList'; 
const Home = () => {
    return (
        <div className="home-container">
            <h1 className="welcome-animation">𝕮𝖆𝖗𝖙𝖈𝖗𝖆𝖟𝖊</h1> {/* Styled text in Fraktur */}
            <ProductList /> {/* Display the ProductList component */}
        </div>
    );
};
export default Home;
