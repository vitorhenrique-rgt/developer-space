import w from "windstitch";

export const HeaderContainer = w.div(
	'flex items-center w-full h-20 py-5 px-6 rounded-xl bg-gray-900 ',
)

export const SearchContainer = w.div(
	'flex items-center gap-5 w-full'
)

export const UserInfoContainer = w.div(
	'flex items-center justify-center gap-3 w-full'
)

export const LanguageContainer = w.div(
	'flex items-center gap-2'
)

export const FlagImage = w.img(
	'w-8 h-8'
)

export const SwitchMode = w.div(
	'flex items-center gap-1 w-fit h-fit p-0.5 bg-gray-600 rounded-3xl '
)

export const IconTheme = w.span(
	'p-0.5 rounded-full cursor-pointer text-white'
)

export const ProfileImage = w.img(
	'w-10 h-10 rounded-full object-cover object-center'
)
