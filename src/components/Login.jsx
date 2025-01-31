// // import React, { useState } from "react";  
// // import { useNavigate } from "react-router-dom";  

// // const Login = ({ setCurrentUser, registeredUser }) => {  
// //   const [formData, setFormData] = useState({  
// //     email: "",  
// //     password: "",  
// //   });  
// //   const [error, setError] = useState("");  
// //   const navigate = useNavigate();  

// //   const handleInputChange = (e) => {  
// //     const { name, value } = e.target;  
// //     setFormData({ ...formData, [name]: value });  
// //   };  

// //   const handleSubmit = (e) => {  
// //     e.preventDefault();  
// //     if (  
// //       registeredUser?.email === formData.email &&  
// //       registeredUser?.password === formData.password  
// //     ) {  
// //       setCurrentUser(registeredUser);  
// //       navigate("/userdetails");  
// //     } else {  
// //       setError("Invalid login credentials. Please try again.");  
// //     }  
// //   };  

// //   return (  
// //     <div  
// //       style={{  
// //         backgroundImage: "url('/images/rbg.jpg')", // Your image path  
// //         backgroundSize: "cover",  
// //         backgroundRepeat: "no-repeat",  
// //         backgroundPosition: "center",  
// //         height: "100vh",  
// //         width: "100vw",  
// //         display: "flex",  
// //         justifyContent: "center",  
// //         alignItems: "center",  
// //         position: "relative",  
// //       }}  
// //     >  
// //       <div  
// //         style={{  
// //           backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background  
// //           padding: "20px",  
// //           borderRadius: "10px",  
// //           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",  
// //           width: "300px",  
// //           textAlign: "center",  
// //         }}  
// //       >  
// //         <form onSubmit={handleSubmit}>  
// //           <div className="input-container" style={{ position: "relative", marginBottom: "15px" }}>  
// //             <img  
// //               src="https://img.icons8.com/ios-filled/20/007bff/user.png" // User icon  
// //               alt="User Icon"  
// //               style={{  
// //                 position: "absolute",  
// //                 left: "10px",  
// //                 top: "50%",  
// //                 transform: "translateY(-50%)",  
// //               }}  
// //             />  
// //             <input  
// //               type="email"  
// //               name="email"  
// //               placeholder="User Email"  
// //               value={formData.email}  
// //               onChange={handleInputChange}  
// //               required  
// //               style={{  
// //                 width: "100%",  
// //                 padding: "10px 10px 10px 40px", // Add padding to the left for the icon  
// //                 borderRadius: "5px",  
// //                 border: "1px solid #007bff",  
// //               }}  
// //             />  
// //           </div>  
// //           <div className="input-container" style={{ position: "relative", marginBottom: "15px" }}>  
// //             <img  
// //               src="https://img.icons8.com/ios-filled/20/007bff/lock.png" // Lock icon  
// //               alt="Lock Icon"  
// //               style={{  
// //                 position: "absolute",  
// //                 left: "10px",  
// //                 top: "50%",  
// //                 transform: "translateY(-50%)",  
// //               }}  
// //             />  
// //             <input  
// //               type="password"  
// //               name="password"  
// //               placeholder="Password"  
// //               value={formData.password}  
// //               onChange={handleInputChange}  
// //               required  
// //               style={{  
// //                 width: "100%",  
// //                 padding: "10px 10px 10px 40px", // Add padding to the left for the icon  
// //                 borderRadius: "5px",  
// //                 border: "1px solid #007bff",  
// //               }}  
// //             />  
// //           </div>  
// //           <div className="remember-me" style={{ marginBottom: "15px" }}>  
// //             <input type="checkbox" id="rememberMe" />  
// //             <label htmlFor="rememberMe">Remember Me</label>  
// //           </div>  
// //           {error && <p className="error" style={{ color: "red" }}>{error}</p>}  
// //           <button  
// //             type="submit"  
// //             style={{  
// //               width: "100%",  
// //               padding: "10px",  
// //               backgroundColor: "#007bff",  
// //               color: "white",  
// //               border: "none",  
// //               borderRadius: "5px",  
// //               cursor: "pointer",  
// //             }}  
// //           >  
// //             LOGIN  
// //           </button>  
// //         </form>  
// //         <div className="forgot-password" style={{ marginTop: "10px" }}>  
// //           <p>Forgot Password?</p>  
// //         </div>  
// //       </div>  
// //     </div>  
// //   );  
// // };  

// // export default Login;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setCurrentUser }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setCurrentUser(data.user);
//         localStorage.setItem("token", data.token);
//         navigate("/userdetails");
//       } else {
//         setError(data.message || "Invalid login credentials.");
//       }
//     } catch (error) {
//       setError("Network error. Please try again.");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/rbg.jpg')" }}
//     >
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center bg-opacity-80">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <div className="relative">
//             <img
//               src="https://img.icons8.com/ios-filled/20/007bff/user.png"
//               alt="User Icon"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="User Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 pl-10 border rounded"
//             />
//           </div>
//           <div className="relative">
//             <img
//               src="https://img.icons8.com/ios-filled/20/007bff/lock.png"
//               alt="Lock Icon"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 pl-10 border rounded"
//             />
//           </div>
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" /> Remember Me
//             </label>
//             <p className="text-blue-500 cursor-pointer hover:underline">
//               Forgot Password?
//             </p>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//           >
//             LOGIN
//           </button>
//         </form>

//         <p className="mt-3 text-sm">
//           Don't have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer hover:underline"
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setCurrentUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/userdetails");
      } else {
        setError(data.message || "Invalid login credentials.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/rbg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="input-container" style={{ position: "relative", marginBottom: "15px" }}>
            <img
              src="https://img.icons8.com/ios-filled/20/007bff/user.png"
              alt="User Icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="User Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "10px 10px 10px 40px",
                borderRadius: "5px",
                border: "1px solid #007bff",
              }}
            />
          </div>
          <div className="input-container" style={{ position: "relative", marginBottom: "15px" }}>
            <img
              src="https://img.icons8.com/ios-filled/20/007bff/lock.png"
              alt="Lock Icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "10px 10px 10px 40px",
                borderRadius: "5px",
                border: "1px solid #007bff",
              }}
            />
          </div>
          <div className="remember-me" style={{ marginBottom: "15px" }}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          {error && <p className="error" style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>
        </form>
        <div className="forgot-password" style={{ marginTop: "10px" }}>
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
