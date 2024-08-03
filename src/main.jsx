import React from "react";
import ReactDOM from "react-dom/client";

import theme from './styles/theme'
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
				<Home />
			</GoogleOAuthProvider>
		</ThemeProvider>
  </React.StrictMode>,
);
