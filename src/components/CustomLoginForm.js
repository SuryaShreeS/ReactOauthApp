// import React, { useState } from "react";
// import axios from "axios"; // For making HTTP requests
// import { useNavigate } from "react-router-dom";
// import "../styles/LoginStyles.css";

// const CustomLoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://dev-ztbgjd8qex1n4eqp.us.auth0.com/oauth/token",
//         {
//           grant_type: "password",
//           username: email,
//           password: password,
//           audience: "https://dev-ztbgjd8qex1n4eqp.us.auth0.com/api/v2/", // Optional, if you are using API
//           client_id: "b8oa8G7Fs76llmtmgHXoPWcXpvmi7eZ7",
//           client_secret:
//             "cUHRGh8ROs-WYNsqE22VMG64WA7GrDU2J9QcGVPsWEYv3imTCtUZ7EuQlQcXHG4-", // Optional, in some cases
//         }
//       );
//       console.log(response.data.access_token, ">>>>>>..");

//       // Save the access token to local storage or context
//       localStorage.setItem("accessToken", response.data.access_token);

//       // Redirect to a protected route
//       navigate("/welcome");
//     } catch (error) {
//       // Handle errors
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div>
//       <h2>Log In</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// };

// export default CustomLoginForm;

import React, { useState } from "react";
import axios from "axios"; // For making HTTP requests
import { useNavigate } from "react-router-dom";
import "../styles/LoginStyles.css"; // Import the CSS file

const CustomLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dev-ztbgjd8qex1n4eqp.us.auth0.com/oauth/token",
        {
          grant_type: "password",
          username: email,
          password: password,
          audience: "https://dev-ztbgjd8qex1n4eqp.us.auth0.com/api/v2/",
          client_id: "b8oa8G7Fs76llmtmgHXoPWcXpvmi7eZ7",
          client_secret:
            "cUHRGh8ROs-WYNsqE22VMG64WA7GrDU2J9QcGVPsWEYv3imTCtUZ7EuQlQcXHG4-",
        }
      );
      console.log(response.data.access_token, ">>>>>>..");

      localStorage.setItem("accessToken", response.data.access_token);

      navigate("/welcome");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default CustomLoginForm;
