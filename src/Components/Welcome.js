import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      console.log("???????????/");
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken, "??????????");

      if (!accessToken) {
        navigate("/login"); // Redirect to login if not authenticated
        return;
      }

      try {
        console.log("fetch user");
        // Call Auth0's userinfo endpoint to get user details
        const response = await axios.get(
          "https://dev-ztbgjd8qex1n4eqp.us.auth0.com/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log("fetch det");
        setError("Failed to fetch user details");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Nickname: {user.nickname}</p>
      <p>
        Picture: <img src={user.picture} alt="Profile" />
      </p>
      <button onClick={() => navigate("/login")}>Log Out</button>
    </div>
  );
};

export default Welcome;
