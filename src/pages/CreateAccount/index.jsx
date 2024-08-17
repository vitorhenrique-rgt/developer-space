import { AuthContainer, AuthContent, AuthInputs, Label, LoginGoogle, Title, AlreadyHave, PassStrength, PrivacyTerms, InputContainer, Progress } from './style'
import Separator from '../../components/Separator'
import Input from '../../components/Input'
import LogoGoogle from '../../assets/google-logo.png'
import LinkContent from '../../components/Link'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import { useNavigate, Link } from 'react-router-dom'

const AuthSignUp =  () =>{
	const navigate = useNavigate()
	const continueWithGoogle = async () =>{
		navigate('/home')
	}
	return(
		<AuthContainer>
			<AuthContent>
				<Title>Sign Up</Title>
				<LoginGoogle onClick={continueWithGoogle}>
					<img className='w-8 h-8' src={LogoGoogle} alt="Logo do Google" />
					Entrar com o Google
				</LoginGoogle>
				<Separator/>
				<AuthInputs>
					<InputContainer>
						<Label>Email</Label>
						<Input
							type={"email"}
							placeholder={"email@email.com"}
						></Input>
					</InputContainer>
					<InputContainer>
						<Label htmlFor='password'>Senha</Label>
						<div className='relative'>
							<Input name='password'
								type={"password"}
								side={"right"}
								placeholder={"Digite uma senha forte..."}
							></Input>
							<Icon name={"visibility_off"} size={'lg'} side={'right'}/>
						</div>
					</InputContainer>
					<InputContainer>
						<Label>Confirme a senha</Label>
						<div className='relative'>
							<Input
								type={"password"}
								side={"right"}
								placeholder={"Digite a senha novamente..."}
							></Input>
							<Icon name={'visibility_off'} size={'lg'} side={'right'} />
						</div>
					</InputContainer>
					<PassStrength>
						<Progress></Progress>
						<Progress></Progress>
						<Progress></Progress>
						<Progress></Progress>
					</PassStrength>
					<PrivacyTerms>
						<input className='cursor-pointer' type="checkbox"/>
						<p className='cursor-pointer text-sm text-grey-100'>Concordo com os <LinkContent><Link>Termos de Privacidade</Link></LinkContent></p>
					</PrivacyTerms>
				</AuthInputs>
				<Button color='primary' size='large'>Sign In</Button>
				<AlreadyHave>
					<p className='text-sm'>Tem uma conta? <LinkContent><Link to="/">Entre</Link></LinkContent></p>
					</AlreadyHave>
			</AuthContent>
		</AuthContainer>
	)
}

export default AuthSignUp
