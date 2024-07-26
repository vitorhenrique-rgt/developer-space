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
		background-color: ${(props) => props.theme.colors.gray100};
	}

	& span{
		padding: 0 10px;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: ${(props) => props.theme.colors.gray700};
	}
`
