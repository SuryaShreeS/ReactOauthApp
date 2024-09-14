// import React from "react";
// import ReactDOM from "react-dom"; // Use this for React 17 and earlier
// import { Auth0Provider } from "@auth0/auth0-react";
// import { Provider } from "react-redux";
// import store from "./store";
// import App from "./App";

// const domain = "dev-ztbgjd8qex1n4eqp.us.auth0.com";
// const clientId = "b8oa8G7Fs76llmtmgHXoPWcXpvmi7eZ7";

// ReactDOM.render(
//   <Auth0Provider
//     domain={domain}
//     clientId={clientId}
//     authorizationParams={{ redirect_uri: window.location.origin }}
//   >
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Auth0Provider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// Auth0 configuration
const domain = "dev-ztbgjd8qex1n4eqp.us.auth0.com";
const clientId = "b8oa8G7Fs76llmtmgHXoPWcXpvmi7eZ7";

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }} // Use this parameter
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
