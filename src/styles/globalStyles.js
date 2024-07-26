
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: "Roboto", sans-serif;
			color: ${(props) => props.theme.colors.gray100};
	}
	body {
		background-color: ${(props) => props.theme.colors.gray000};
	}
	button{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 10px;
		gap: 3px;
		cursor: pointer;
		border-radius: 6px;
		border: none;
	}


`
