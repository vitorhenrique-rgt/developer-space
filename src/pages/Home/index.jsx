import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import { HomeContainer, HomeContent, Div } from "./style"

function Home() {
  return (
    <HomeContainer>
      <Navigation />
      <Div>
        <Header />
        <HomeContent></HomeContent>
      </Div>
    </HomeContainer>
  )
}

export default Home;
