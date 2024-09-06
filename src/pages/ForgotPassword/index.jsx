import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import LinkContent from '../../components/Link'
import { Container, ContentContainer, Text, Title } from './style'

const ForgotPassword = () => {
	const navigate = useNavigate()

	const backToLogin = () => {
		navigate('/verification-code')
	}

	return (
		<Container>
			<ContentContainer>
				<Title>Esqueceu a senha?</Title>
				<Text>
					Insira o e-mail que você usou ao criar a conta e nós lhe enviaremos um código para redefinir sua senha
				</Text>
				<Input type='email' />
				<Button size='lg' color='primary' onClick={backToLogin}>
					Enviar
				</Button>
				<div className='text-center'>
					<LinkContent>
						<Link to='/'>Voltar para o login</Link>
					</LinkContent>
				</div>
			</ContentContainer>
		</Container>
	)
}
export default ForgotPassword
