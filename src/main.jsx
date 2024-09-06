import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import CreateAccount from './pages/CreateAccount'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import VerificationCode from './pages/VerificationCode'
import { GlobalStyle } from './styles/globalStyles'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/create-account' element={<CreateAccount />} />
					<Route path='/home' element={<Home />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/verification-code' element={<VerificationCode />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
)
