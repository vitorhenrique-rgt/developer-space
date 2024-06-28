
import { NavContainer, LogoContainer, NavListItem  } from "./style"

import Logo from '../../assets/logo.png'
function Navigation(){
    return(
        <NavContainer>
            <LogoContainer>
                <img src={Logo}/>
                <span>Developer Space</span>
            </LogoContainer>
            <nav>
                <NavListItem href=""><span className="material-symbols-rounded">dashboard</span><span className="text">Dashboard</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">calendar_month</span><span className="text">Calendário</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">forum</span><span className="text">Chat</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">local_mall</span><span className="text">E-Commerce</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">mail</span><span className="text">Email</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">business_center</span><span className="text">Projetos</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">rss_feed</span><span className="text">Social</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">folder</span><span className="text">Aquivos</span></NavListItem>
                <NavListItem href=""><span className="material-symbols-rounded">auto_stories</span><span className="text">Paginas</span></NavListItem>
        </nav>
        </NavContainer>
    )
}

export default Navigation
