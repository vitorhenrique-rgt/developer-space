import { ListItem, LogoContainer, LogoSpan, NavContainer, NavList } from './style'

import Logo from '../../assets/logo.png'

function Navigation() {
	return (
		<NavContainer>
			<LogoContainer>
				<img src={Logo} alt='Logo' />
				<LogoSpan>Developer Space</LogoSpan>
			</LogoContainer>
			<nav>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						dashboard
					</ListItem>
					<ListItem className='text'>Dashboard</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						calendar_month
					</ListItem>
					<ListItem className='text'>Calendário</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						forum
					</ListItem>
					<ListItem className='text'>Chat</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						local_mall
					</ListItem>
					<ListItem className='text'>E-Commerce</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						mail
					</ListItem>
					<ListItem className='text'>Email</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						business_center
					</ListItem>
					<ListItem className='text'>Projetos</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						rss_feed
					</ListItem>
					<ListItem className='text'>Social</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						folder
					</ListItem>
					<ListItem className='text'>Aquivos</ListItem>
				</NavList>
				<NavList href=''>
					<ListItem size='sm' className='material-symbols-rounded'>
						auto_stories
					</ListItem>
					<ListItem className='text'>Paginas</ListItem>
				</NavList>
			</nav>
		</NavContainer>
	)
}

export default Navigation
