import w from 'windstitch'

export const Container = w.div('w-full h-screen flex justify-center items-center')
export const ContentContainer = w.div('m-auto w-full max-w-md py-10 px-6 flex flex-col gap-5 rounded-md bg-gray-900')

export const Title = w.h1('text-2xl font-bold')

export const Text = w.p('text-sm text-gray-200')

export const CodeFieldContainer = w.div('w-full h-20 flex justify-center items-center gap-3')

export const CodeField = w.div(
	'max-w-14 w-full h-full bg-gray-800 rounded-md text-4xl font-bold flex justify-center items-center',
)
