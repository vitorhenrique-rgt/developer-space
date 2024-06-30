import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
	height: 80px;
	padding: 20px 24px;
	border-radius: 12px;
	background-color: #1d232c; //gray-900
	display: flex;
	align-items: center;

	span {
		color: #586a84; //gray-700
	}
	.material-symbols-rounded {
		cursor: pointer;
	}
`;

export const SearchContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 30px;
`;

export const SearchInput = styled.input`
	width: 100%;
	max-width: 300px;
	height: 40px;
	padding: 12px 10px 12px 20px;
	background: #3b4758; //grey-800
	border-radius: 6px;
	border: none;
	outline: none;
	margin: 5px 0;

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

export const UserInfoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 14px;
`;

export const LanguageContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const FlagImage = styled.img`
	width: 30px;
	height: 30px;
`;

export const ArrowImage = styled.img`
	width: 30px;
	height: 30px;
`;

export const SwitchMode = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	padding: 1px;
	align-items: center;
	background-color: #7d8fa9; //gray-600
	gap: 2px;
	border-radius: 15px;

	span {
		padding: 2px;
		border-radius: 50%;
		color: #fff;
	}
	span:nth-child(2) {
		background-color: #3b4758; //gray-800
	}
`;

export const ProfileImage = styled.img`
	width: 40px;
	border-radius: 50px;
`;
