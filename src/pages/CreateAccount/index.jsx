import { Link, useNavigate } from 'react-router-dom'
import LogoGoogle from '../../assets/google-logo.png'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Input from '../../components/Input'
import LinkContent from '../../components/Link'
import Separator from '../../components/Separator'
import {
	AlreadyHave,
	AuthContainer,
	AuthContent,
	AuthInputs,
	InputContainer,
	Label,
	LoginGoogle,
	PassStrength,
	PrivacyTerms,
	Progress,
	Title,
} from './style'

const AuthSignUp = () => {
	const navigate = useNavigate()
	const continueWithGoogle = async () => {
		navigate('/home')
	}
	return (
		<AuthContainer>
			<AuthContent>
				<Title>Sign Up</Title>
				<LoginGoogle onClick={continueWithGoogle}>
					<img className='w-8 h-8' src={LogoGoogle} alt='Logo do Google' />
					Entrar com o Google
				</LoginGoogle>
				<Separator />
				<AuthInputs>
					<InputContainer>
						<Label>Email</Label>
						<Input type={'email'} placeholder={'email@email.com'} />
					</InputContainer>
					<InputContainer>
						<Label htmlFor='password'>Senha</Label>
						<div className='relative'>
							<Input name='password' type={'password'} side={'right'} placeholder={'Digite uma senha forte...'} />
							<Icon name={'visibility_off'} size={'lg'} side={'right'} />
						</div>
					</InputContainer>
					<InputContainer>
						<Label>Confirme a senha</Label>
						<div className='relative'>
							<Input type={'password'} side={'right'} placeholder={'Digite a senha novamente...'} />
							<Icon name={'visibility_off'} size={'lg'} side={'right'} />
						</div>
					</InputContainer>
					<PassStrength>
						<Progress />
						<Progress />
						<Progress />
					</PassStrength>
					<PrivacyTerms>
						<input className='cursor-pointer' type='checkbox' />
						<p className='cursor-pointer text-sm text-grey-100'>
							Concordo com os{' '}
							<LinkContent>
								<Link>Termos de Privacidade</Link>
							</LinkContent>
						</p>
					</PrivacyTerms>
				</AuthInputs>
				<Button color='primary' size='large'>
					Sign In
				</Button>
				<AlreadyHave>
					<p className='text-sm'>
						Tem uma conta?{' '}
						<LinkContent>
							<Link to='/'>Entre</Link>
						</LinkContent>
					</p>
				</AlreadyHave>
			</AuthContent>
		</AuthContainer>
	)
}

export default AuthSignUp
