import { useGoogleLogin  } from '@react-oauth/google'
import { AuthContainer, AuthContent, AuthInputs, Label, LoginGoogle, Title, AlreadyHave, PassStrength, PrivacyTerms } from './style'
import Separator from '../../components/Separator'
import Input from '../../components/Input'
import LogoGoogle from '../../assets/google-logo.png'
import Link from '../../components/Link'
import PrimaryButton from '../../components/Button'

const AuthSignUp =  () =>{
	const login = useGoogleLogin({
		onSuccess: codeResponse => console.log(codeResponse),
		fluxo: 'auth-code',
	})
	return(
		<AuthContainer>
			<AuthContent>
				<Title>Sign Up</Title>
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
							info={"Digite uma senha forte..."}
						></Input>
					</div>
					<div>
						<Label>Confirme a senha</Label>
						<Input
							iconType={"visibility_off"}
							inputType={"password"}
							iconSide={"right"}
							info={"Digite a senha novamente..."}
						></Input>
					</div>
					<PassStrength>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</PassStrength>
					<PrivacyTerms>
						<input type="checkbox" name="agree" id="agree" />
						<label htmlFor="agree">Concordo com os <Link>Termos de Privacidade</Link></label>
					</PrivacyTerms>
				</AuthInputs>
				<PrimaryButton>Sign In</PrimaryButton>
				<AlreadyHave>
					<p>Tem uma conta? <Link>Entre</Link></p>
					</AlreadyHave>
			</AuthContent>
		</AuthContainer>
	)
}

export default AuthSignUp
