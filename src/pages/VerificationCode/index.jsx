import { Link } from "react-router-dom";
import ContentLink from '../../components/Link'
import Button from '../../components/Button'
import { CodeField, CodeFieldContainer, Container, ContentContainer, Text, Title } from "./style";

const VerificationCode = () =>{
	return(
		<Container>
			<ContentContainer>
				<Title>Validação de código</Title>
				<Text>Insira abaixo o código de 6 dígitos que você recebeu em <span className="font-bold">ramonejinga@mail.com</span></Text>
				<CodeFieldContainer>
					<CodeField contenteditable="true">0</CodeField>
					<CodeField contenteditable="true">0</CodeField>
					<CodeField contenteditable="true">0</CodeField>
					<CodeField contenteditable="true">0</CodeField>
					<CodeField contenteditable="true">0</CodeField>
					<CodeField contenteditable="true">0</CodeField>
				</CodeFieldContainer>
				<Button size='large' color='primary'>Validar</Button>
				<div className="text-center">
					<ContentLink>
						<Link to='/'>Voltar para o login</Link>
					</ContentLink>
				</div>
			</ContentContainer>
		</Container>
	)
}

export default VerificationCode
