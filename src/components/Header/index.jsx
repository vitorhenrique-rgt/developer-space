import {
	FlagImage,
	HeaderContainer,
	LanguageContainer,
	ProfileImage,
	SearchContainer,
	SwitchMode,
	UserInfoContainer,
	IconTheme} from "./style";
import Flag from "../../assets/brasil.png";
import Profile from "../../assets/avatar.png";
import Input from "../Input";
import Icon from "../Icon";
import { useUser } from "../../context/UserContext";

function Header() {
	const { user } = useUser();
	console.log(user)
	return (
		<HeaderContainer>
			<SearchContainer>
				<Icon color={'gray'} size="lg">menu</Icon>
				<div className="relative">
				<Input
					type={"search"}
					side={"left"}
					placeholder={"Pesquisar..."}
				></Input>
				<Icon side={"left"} size="lg">search</Icon>
				</div>
			</SearchContainer>
			<UserInfoContainer>
				<LanguageContainer>
					<FlagImage src={Flag} />
					<span className="text-gray-400">Português</span>
					<Icon size='lg'>keyboard_arrow_down</Icon>
				</LanguageContainer>
				<Icon size='lg' className="material-symbols-rounded">apps</Icon>
				<Icon size='lg' className="material-symbols-rounded">notifications</Icon>
				<SwitchMode>
					<IconTheme size='md' className="material-symbols-rounded">light_mode</IconTheme>
					<IconTheme size='md' className="material-symbols-rounded bg-gray-800">dark_mode</IconTheme>
				</SwitchMode>
				<ProfileImage src={Profile} />
			</UserInfoContainer>
		</HeaderContainer>
	);
}

export default Header;
