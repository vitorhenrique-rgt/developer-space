import { Input as Ipt } from './style'

function Input({ placeholder, side, type }) {
	return <Ipt type={type} placeholder={placeholder} side={side} />
}

export default Input
