import w from "windstitch";

export const Input = w.input(
	'w-full h-10 text-sm bg-gray-800 rounded-md border-0 outline-none px-3 py-5 placeholder-opacity-40 placeholder-gray-400 focus:ring-1 focus:ring-blue-600',
	{
		variants:{
			side:{
				left:'pl-10',
				right:'pr-10'
			}
		}
	}
)

export const Icon = w.span(
	'absolute cursor-pointer text-gray-100 text-lg',
	{
		variants:{
			side:{
				left:'left-2 top-2',
				right:'right-2 top-2'
			}
		}
	}
)

