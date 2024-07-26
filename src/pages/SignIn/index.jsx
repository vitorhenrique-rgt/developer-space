import { useGoogleLogin  } from '@react-oauth/google'
import { AuthContainer, AuthContent, AuthInputs, CreateAccount, Label, LoginGoogle, RememberForgot, RememberMe, Title } from './style'
import Separator from '../../components/Separator'
import Input from '../../components/Input'
import LogoGoogle from '../../assets/google-logo.png'
import Link from '../../components/Link'
import PrimaryButton from '../../components/Button'

const AuthLogin =  () =>{
	const login = useGoogleLogin({
		onSuccess: codeResponse => console.log(codeResponse),
		fluxo: 'auth-code',
	})
	return(
		<AuthContainer>
			<AuthContent>
				<Title>Sign In</Title>
				<LoginGoogle onClick={() => login()}>
					<img src={LogoGoogle} alt="Logo do Google" />
					Entrar com o Google
				</LoginGoogle>
				<Separator/>
				<AuthInputs>
					<div>
						<Label>Email</Label>
						<Input
							inputType={"email"}
							info={"email@email.com"}
						></Input>
					</div>
					<div>
						<Label>Senha</Label>
						<Input
							iconType={"visibility_off"}
							inputType={"password"}
							iconSide={"right"}
							info={"Senha"}
						></Input>
					</div>
					<RememberForgot>
					<RememberMe>
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Lembrar-me</label>
					</RememberMe>
					<div>
					<Link>Esqueceu a Senha?</Link>
					</div>
					</RememberForgot>
				</AuthInputs>
				<PrimaryButton>Sign In</PrimaryButton>
				<CreateAccount>
					<p>Não tem uma conta? <Link>Criar nova</Link></p>
					</CreateAccount>
			</AuthContent>
		</AuthContainer>
	)
}

export default AuthLogin
