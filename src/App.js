// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useSelector } from "react-redux";
// import Login from "./components/Login";
// import Welcome from "./components/Welcome";

// const App = () => {
//   const { isAuthenticated, isLoading } = useAuth0();
//   const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={!isLoggedIn ? <Login /> : <Welcome />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CustomLoginForm from "./components/CustomLoginForm";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route
    //       path="/dashboard"
    //       element={isAuthenticated ? <Welcome /> : <Navigate to="/" />}
    //     />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/login" element={<CustomLoginForm />} />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<CustomLoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
