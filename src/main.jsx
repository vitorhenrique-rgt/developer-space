import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './styles/theme'
import Home from './pages/Home'
import Login from "./pages/Login";
import CreateAccount from './pages/CreateAccount';
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import ForgotPassword from "./pages/ForgotPassword";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
				<Router>
					<Routes>
						<Route path="/" element={<Login/>} />
						<Route path="/create-account" element={<CreateAccount />} />
						<Route path="/home" element={<Home />} />
						<Route path="//forgot-password" element={<ForgotPassword />} />
					</Routes>
				</Router>
		</ThemeProvider>
  </React.StrictMode>,
);
