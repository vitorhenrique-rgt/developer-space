import { AppsImage, ArrowImage, DarkModeImage, FlagImage, HeaderContainer, LanguageContainer, LanguageLabel, LightModeImage, NotificationImage, ProfileImage, SearchContainer, SearchImage, SearchInput, SwitchMode, UserInfoContainer } from "./style";
import Search from '../../assets/search.svg'
import Flag from '../../assets/brasil.png'
import ArrowDown from '../../assets/arrow-down.svg'
import Apps from '../../assets/apps.svg'
import Notification from '../../assets/notification.svg'
import LightMode from '../../assets/light-mode.svg'
import DarkMode from '../../assets/dark-mode.svg'
import Profile from '../../assets/avatar.png'

function Header(){
    return(
        <HeaderContainer>
            <SearchContainer>
                <SearchInput placeholder="Pesquisar..." ></SearchInput>
                <SearchImage src={Search} />
            </SearchContainer>
            <UserInfoContainer>
                <LanguageContainer>
                    <FlagImage src={Flag}/>
                    <LanguageLabel>Português</LanguageLabel>
                    <ArrowImage src={ArrowDown} />
                </LanguageContainer>
                <AppsImage src={Apps}/>
                <NotificationImage src={Notification}/>
                <SwitchMode>
                    <LightModeImage src={LightMode}/>
                    <DarkModeImage src={DarkMode}/>
                </SwitchMode>
                <ProfileImage src={Profile}/>
            </UserInfoContainer>
        </HeaderContainer>
    )        
}

export default Header