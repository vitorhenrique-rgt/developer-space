import styled from "styled-components";

export const ContainerInput = styled.div`
	position: relative;
	width: 100%;
	max-width: 300px;
	span {
		position: absolute;
		top: 8px;
		${(props) =>
			props.side === "right"
				? `
					right: 10px;
				`
				: props.side === "left"
				? `
					left: 10px;
				`
				: `
					display: none;
				`}
	}
`;

export const InputContent = styled.input`
	width: 100%;
	height: 40px;
	${(props) =>
		props.side === "right"
			? `
					padding: 12px 40px 12px 20px;
				`
			: props.side === "left"
			? `
					padding: 12px 20px 12px 40px;
				`
			: ``};
	background: #3b4758; //grey-800
	border-radius: 6px;
	border: none;
	outline: none;

	&::placeholder {
		color: #bac4d1; //text-ternary-color
		opacity: 0.4;
		font-size: 14px;
		line-height: 16px;
	}

	&:focus {
		border: solid 1px #319dff; //primary-600
	}
`;
