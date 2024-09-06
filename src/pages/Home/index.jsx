import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import { Div, HomeContainer, HomeContent } from './style'

function Home() {
	return (
		<HomeContainer>
			<Navigation />
			<Div>
				<Header />
				<HomeContent />
			</Div>
		</HomeContainer>
	)
}

export default Home
