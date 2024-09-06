import w from 'windstitch'

export const IconElement = w.span('cursor-pointer text-gray-100', {
	variants: {
		size: {
			xs: 'text-sm',
			sm: 'text-base',
			md: 'text-lg',
			lg: 'text-2xl',
			xl: 'text-3xl',
		},
		side: {
			left: 'left-2 inset-y-1 absolute',
			right: 'inset-y-1 right-2 absolute',
		},
		color: {
			default: 'text-gray-400',
			while: 'text-white',
			gray: 'text-gray-700 hover:text-gray-100',
			blue: 'text-blue-700',
			red: 'text-red-700',
			green: 'text-green-700',
		},
	},
	defaultVariants: {
		size: 'lg',
		color: 'default',
	},
})
