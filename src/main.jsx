import React from "react";
import ReactDOM from "react-dom/client";

import theme from './styles/theme'
// import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from "styled-components";
import AuthSignUp from "./pages/SignUp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
				<AuthSignUp />
			</GoogleOAuthProvider>
		</ThemeProvider>
  </React.StrictMode>,
);
