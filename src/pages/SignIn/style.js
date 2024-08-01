import styled from "styled-components";
export const AuthContainer = styled.div`
	width:100vw;
	height:100vh;
	display: flex;
	justify-content:center;
	align-items:center;
`

export const AuthContent = styled.div`
	margin:auto;
	width:100%;
	max-width:480px;
	padding:40px 24px;
	display:flex;
	flex-direction:column;
	align-items:start;
	justify-content:center;
	gap: 20px;
	border-radius:6px;
	background-color: ${(props) => props.theme.colors.gray900};
`
export const Title = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 28px;
`
export const LoginGoogle = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 3px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.colors.gray900};
  border: 1px ${(props) => props.theme.colors.gray600};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.gray100};

	& img{
		width: 30px;
	}
	&:hover{
  background: ${(props) => props.theme.colors.gray800};
	}
`
export const AuthInputs = styled.label`
	width:100%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:start;
	gap:20px;

	& div{
		width:100%;
	}
`
export const Label = styled.label`
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	margin-bottom:6px;
`
export const RememberForgot = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;

	& div:nth-child(2){
	display:flex;
	align-items:center;
	justify-content:end;
}
`

export const RememberMe = styled.div`
	width:fit-content;
	display: flex;
	justify-content:start;
	align-items:center;
	gap:10px;
	& input{
		cursor:pointer;
	}
	& label{
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: ${(props) => props.theme.colors.gray100};
		cursor:pointer;
	}
`

export const CreateAccount = styled.div`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	& p{
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
	}
`
