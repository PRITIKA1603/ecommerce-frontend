import React from 'react';  
import { Link } from 'react-router-dom';  
const Header = ({ currentUser }) => {  
    return (  
        <header className="header">  
            <div className="header-container">  
                <nav>  
                    {!currentUser ? (  
                        <>  
                            <Link to="/register">Register</Link>  
                            <Link to="/">Login</Link>  
                        </>  
                    ) : null} {/* Remove Logout link */}  
                </nav>  
            </div>  
        </header>  
    );  
};  
export default Header;