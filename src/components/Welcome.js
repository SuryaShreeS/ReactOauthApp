import React from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
  const { logout } = useAuth0();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Welcome, {user?.name}!</h2>
      <p>Email: {user?.email}</p>
      <img src={user?.picture} alt="User Profile" />
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
    </div>
  );
};

export default Welcome;
