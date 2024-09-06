import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LogoGoogle from '../../assets/google-logo.png'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Input from '../../components/Input'
import LinkContent from '../../components/Link'
import Separator from '../../components/Separator'
import {
	AuthContainer,
	AuthContent,
	AuthInputs,
	CreateAccount,
	InputContainer,
	Label,
	LoginGoogle,
	RememberForgot,
	RememberMe,
	Title,
} from './style'

const AuthLogin = () => {
	const navigate = useNavigate()

	const continueWithGoogle = async () => {
		navigate('/home')
	}

	return (
		<AuthContainer>
			<AuthContent>
				<Title>Login</Title>
				<LoginGoogle onClick={continueWithGoogle}>
					<img className='w-8 h-8' src={LogoGoogle} alt='Logo do Google' />
					continuar com Google
				</LoginGoogle>
				<Separator />
				<AuthInputs>
					<InputContainer>
						<Label>Email</Label>
						<Input type={'email'} placeholder={'email@email.com'} />
					</InputContainer>
					<InputContainer>
						<Label>Senha</Label>
						<div className='relative'>
							<I type={'password'} side={'right'} placeholder={'Senha'} />
							<Icon name={'visibility_off'} size={'lg'} side={'right'} />
						</div>
					</InputContainer>
					<RememberForgot>
						<RememberMe>
							<input className='cursor-pointer' type='checkbox' id='remember-me' />
							<label className='text-sm cursor-pointer' htmlFor='remember-me'>
								Lembrar-me
							</label>
						</RememberMe>
						<div>
							<LinkContent>
								<Link to='/forgot-password'>Esqueceu a Senha?</Link>
							</LinkContent>
						</div>
					</RememberForgot>
				</AuthInputs>
				<Button size='large' color='primary'>
					Sign In
				</Button>
				<CreateAccount>
					<p className='text-sm'>
						Não tem uma conta?{' '}
						<LinkContent>
							<Link to='/create-account'>Criar nova</Link>
						</LinkContent>
					</p>
				</CreateAccount>
			</AuthContent>
		</AuthContainer>
	)
}

export default AuthLogin
