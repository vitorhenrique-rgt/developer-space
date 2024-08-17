import Input from "../../components/Input"
import Button from "../../components/Button"
import LinkContent from "../../components/Link"
import { Link } from "react-router-dom"
import { ContentContainer, Title, Text } from "./style"

const ForgotPassword = ()=>{
	return (
		<ContentContainer>
			<Title>Esqueceu a senha?</Title>
			<Text>Insira o e-mail que você usou ao criar a conta e nós lhe enviaremos um código para redefinir sua senha</Text>
			<Input type='email'/>
			<Button size='lg' color='primary'>Enviar</Button>
			<div className="text-center">
			<LinkContent>
				<Link to='/'>Voltar para o login</Link>
			</LinkContent>
			</div>
		</ContentContainer>
	)
}
export default ForgotPassword
