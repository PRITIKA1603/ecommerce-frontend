import React, { useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";  
 // Import your CSS file for styling  

const UserDetails = ({ userProfile, setUserProfile }) => {  
  const navigate = useNavigate();  

  const [details, setDetails] = useState({  
    name: "",  
    email: "",  
    address: "",  
    phone: "",  
  });  

  const [errors, setErrors] = useState({}); // State for validation errors  

  // Populate details from userProfile if available  
  useEffect(() => {  
    if (userProfile) {  
      setDetails(userProfile);  
    }  
  }, [userProfile]);  

  // Input validation  
  const validate = () => {  
    let isValid = true;  
    const errors = {};  

    if (!details.name.trim()) {  
      isValid = false;  
      errors.name = "Name is required.";  
    }  
    if (!details.email.trim() || !/\S+@\S+\.\S+/.test(details.email)) {  
      isValid = false;  
      errors.email = "A valid email is required.";  
    }  
    if (!details.address.trim()) {  
      isValid = false;  
      errors.address = "Address is required.";  
    }  
    if (!details.phone.trim() || !/^\d{10}$/.test(details.phone)) {  
      isValid = false;  
      errors.phone = "Phone number must be 10 digits.";  
    }  

    setErrors(errors);  
    return isValid;  
  };  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setDetails({ ...details, [name]: value });  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (validate()) {  
      setUserProfile(details); // Save profile data  
      localStorage.setItem("userProfile", JSON.stringify(details)); // Save to localStorage (optional)  
      alert("Profile saved successfully!");  
      navigate("/home"); // Redirect to Home page  
    }  
  };  

  return (  
    <div  
      style={{  
        backgroundImage: "url('/images/rbg.jpg')", // Your image path  
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",  
        backgroundPosition: "center",  
        height: "100vh",  
        width: "100vw",  
        display: "flex",  
        justifyContent: "center",  
        alignItems: "center",  
        position: "relative", // Allows absolute positioning inside the container  
      }}  
    >  
      <div className="form-container">  
        <h2>User Details</h2>  
        <form onSubmit={handleSubmit}>  
          <input  
            type="text"  
            name="name"  
            placeholder="Full Name"  
            value={details.name}  
            onChange={handleChange}  
            required  
          />  
          {errors.name && <p className="error">{errors.name}</p>}  

          <input  
            type="email"  
            name="email"  
            placeholder="Email"  
            value={details.email}  
            onChange={handleChange}  
            required  
          />  
          {errors.email && <p className="error">{errors.email}</p>}  

          <input  
            type="text"  
            name="address"  
            placeholder="Address"  
            value={details.address}  
            onChange={handleChange}  
            required  
          />  
          {errors.address && <p className="error">{errors.address}</p>}  

          <input  
            type="text"  
            name="phone"  
            placeholder="Phone Number"  
            value={details.phone}  
            onChange={handleChange}  
            required  
          />  
          {errors.phone && <p className="error">{errors.phone}</p>}  

          <button type="submit">Save Details</button>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default UserDetails;