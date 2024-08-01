import {w} from "windstitch";

export const Button = w.button(
	'px-4 py-2 rounded-md transition duration-300 ease-in-out',
	{
  variants: {
    color: {
      primary: 'bg-blue-500 text-white hover:bg-blue-700',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      success: 'bg-green-500 text-white hover:bg-green-600',
      danger: 'bg-red-600 text-white hover:bg-red-700',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
			info:'bg-teal-600 hover:bg-teal-700',
    },
    size: {
      small: 'text-sm h-8',
			medium:'text-sm h-10',
      large: 'text-base font-medium h-12',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'small',
  },
})
