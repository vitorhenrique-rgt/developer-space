import styled from "styled-components"

export const SeparatorContainer = styled.div`
	width: 100%;
	height: 100%;
	display:flex;
	justify-content:center;
	align-items:center;

	& div{
		width: 100%;
		height: 1px;
		background-color: #EEF0F4; //gray-100
	}

	& span{
		padding: 0 10px;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #586A84; //grey-700
	}
`
