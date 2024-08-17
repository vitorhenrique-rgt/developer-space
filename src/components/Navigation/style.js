import w from "windstitch";

export const NavContainer = w.aside(
	'max-w-fit h-[calc(100vh - 40px)] bg-gray-900 p-4 rounded-xl mr-5'
)

export const LogoContainer = w.div(
	'flex justify-center items-center gap-2 mb-7',
)

export const LogoSpan =w.span(
	'max-w-fit text-lg font-black'
)

export const NavList = w.span(
	'group w-full h-12 m-0.5 p-4 leading-4 no-underline rounded-md text-gray-400 flex justify-start items-center gap-2 hover:bg-gray-800 focus:bg-blue-700'
)

export const ListItem = w.span(
	'text-sm text-gray-700 group-hover:text-white group-focus:text-white'
)
