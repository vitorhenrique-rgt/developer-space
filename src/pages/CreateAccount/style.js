import w from 'windstitch'
export const AuthContainer = w.div('w-full h-screen flex justify-center items-center')

export const AuthContent = w.div(
	'm-auto w-full max-w-md py-10 px-6 flex flex-col justify-center items-start gap-5 rounded-md bg-gray-900',
)

export const Title = w.h1('text-2xl font-bold')

export const LoginGoogle = w.button(
	'w-full flex justify-center items-center py-2 px-3 gap-1 cursor-pointer rounded-md border-solid border border-gray-600 bg-gray-900 text-sm text-gray-100 hover:bg-gray-800',
)

export const InputContainer = w.div('w-full')

export const AuthInputs = w.div('w-full flex flex-col justify-center items-center gap-5')

export const Label = w.label('text-xs mb-2')

export const PassStrength = w.div('w-full flex flex-row justify-center items-center gap-1')
export const Progress = w.div('w-full h-1 rounded-sm bg-green-600')

export const PrivacyTerms = w.div('flex flex-row justify-start items-center gap-1')

export const AlreadyHave = w.div('w-full flex justify-center items-center')
