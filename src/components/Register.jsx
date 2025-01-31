// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Register = ({ setRegisteredUser, onRegister }) => {
// // //   const [formData, setFormData] = useState({
// // //     username: "",
// // //     email: "",
// // //     password: "",
// // //   });
// // //   const navigate = useNavigate();

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setRegisteredUser(formData);
// // //     onRegister(); // Notify App about successful registration
// // //     navigate("/login"); // Redirect to login page
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         backgroundImage: "url('/images/rbg.jpg')", // Your image path
// // //         backgroundSize: "cover",
// // //         backgroundRepeat: "no-repeat",
// // //         backgroundPosition: "center",
// // //         height: "100vh",
// // //         width: "100vw",
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         position: "relative", // Allows absolute positioning inside the container
// // //       }}
// // //     >
// // //       <div
// // //         className="register-form"
// // //         style={{
// // //           backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
// // //           padding: "20px",
// // //           borderRadius: "10px",
// // //           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
// // //           width: "300px",
// // //           textAlign: "center",
// // //         }}
// // //       >
// // //         <h2>Register</h2>
// // //         <form onSubmit={handleSubmit}>
// // //           <input
// // //             type="text"
// // //             name="username"
// // //             placeholder="Username"
// // //             value={formData.username}
// // //             onChange={handleInputChange}
// // //             required
// // //           />
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             placeholder="Email"
// // //             value={formData.email}
// // //             onChange={handleInputChange}
// // //             required
// // //           />
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             placeholder="Password"
// // //             value={formData.password}
// // //             onChange={handleInputChange}
// // //             required
// // //           />
// // //           <button type="submit">Register</button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;






// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const navigate = useNavigate();

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");

// //     try {
// //       const response = await fetch("http://localhost:5000/api/auth/register", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setSuccess("Registration successful! Redirecting to login...");
// //         setTimeout(() => navigate("/login"), 2000);
// //       } else {
// //         setError(data.message || "Registration failed. Try again.");
// //       }
// //     } catch (error) {
// //       setError("Network error. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div
// //       className="flex items-center justify-center min-h-screen bg-cover bg-center"
// //       style={{ backgroundImage: "url('/images/rbg.jpg')" }} // Your image path
// //     >
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center bg-opacity-80">
// //         <h2 className="text-2xl font-bold mb-4">Register</h2>

// //         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
// //         {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

// //         <form onSubmit={handleSubmit} className="space-y-3">
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={formData.username}
// //             onChange={handleInputChange}
// //             required
// //             className="w-full p-2 border rounded"
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             required
// //             className="w-full p-2 border rounded"
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleInputChange}
// //             required
// //             className="w-full p-2 border rounded"
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
// //           >
// //             Register
// //           </button>
// //         </form>

// //         <p className="mt-3 text-sm">
// //           Already have an account?{" "}
// //           <span
// //             className="text-blue-500 cursor-pointer hover:underline"
// //             onClick={() => navigate("/login")}
// //           >
// //             Login
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess("Registration successful! Redirecting to login...");
//         setTimeout(() => navigate("/login"), 2000);
//       } else {
//         setError(data.message || "Registration failed. Try again.");
//       }
//     } catch (error) {
//       setError("Network error. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('/images/rbg.jpg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//       }}
//     >
//       <div
//         className="register-form"
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//           width: "300px",
//           textAlign: "center",
//         }}
//       >
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               border: "1px solid #007bff",
//             }}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               border: "1px solid #007bff",
//             }}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               border: "1px solid #007bff",
//             }}
//           />
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           {success && <p style={{ color: "green" }}>{success}</p>}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "10px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Registration failed. Try again.");
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
        className="register-form"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #007bff",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #007bff",
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
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #007bff",
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
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
            Register
          </button>
        </form>
        <div
          style={{
            marginTop: "15px",
            fontSize: "14px",
            color: "#007bff",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </div>
      </div>
    </div>
  );
};

export default Register;
