import {
	FlagImage,
	HeaderContainer,
	LanguageContainer,
	ProfileImage,
	SearchContainer,
	SearchInput,
	SwitchMode,
	UserInfoContainer,
} from "./style";
import Flag from "../../assets/brasil.png";
import Profile from "../../assets/avatar.png";

function Header() {
	return (
		<HeaderContainer>
			<SearchContainer>
				<span className="material-symbols-rounded">menu</span>
				<SearchInput placeholder="Pesquisar..."></SearchInput>
				<span className="material-symbols-rounded">search</span>
			</SearchContainer>
			<UserInfoContainer>
				<LanguageContainer>
					<FlagImage src={Flag} />
					<span>Português</span>
					<span className="material-symbols-rounded">keyboard_arrow_down</span>
				</LanguageContainer>
				<span className="material-symbols-rounded">apps</span>
				<span className="material-symbols-rounded">notifications</span>
				<SwitchMode>
					<span className="material-symbols-rounded">light_mode</span>
					<span className="material-symbols-rounded">dark_mode</span>
				</SwitchMode>
				<ProfileImage src={Profile} />
			</UserInfoContainer>
		</HeaderContainer>
	);
}

export default Header;
