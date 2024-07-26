import React from "react";
import ReactDOM from "react-dom/client";
import AuthLogin from "./pages/SignIn";
// import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
    <GlobalStyle />
	<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    <AuthLogin />
		</GoogleOAuthProvider>
  </React.StrictMode>,
);
