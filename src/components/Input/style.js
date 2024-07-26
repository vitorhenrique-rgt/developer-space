import styled from "styled-components";

export const ContainerInput = styled.div`
	position: relative;
	width: 100%;
	span {
		position: absolute;
		top: 8px;
		cursor: pointer;
		${({$iconSide}) =>
			($iconSide) === "right"
				? `
					right: 10px;
				`
				: ($iconSide) === "left"
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
	${({$iconSide}) =>
		($iconSide) === "right"
			? `
					padding: 12px 40px 12px 20px;
				`
			: ($iconSide) === "left"
			? `
					padding: 12px 20px 12px 40px;
				`
			: `padding: 12px 20px`};
	background: ${(props) => props.theme.colors.gray800};
	border-radius: 6px;
	border: none;
	outline: none;

	&::placeholder {
		color: ${(props) => props.theme.colors.gray400};
		opacity: 0.4;
		font-size: 14px;
		line-height: 16px;
	}

	&:focus {
		border: solid 1px ${(props) => props.theme.colors.primary600};
	}
`;
