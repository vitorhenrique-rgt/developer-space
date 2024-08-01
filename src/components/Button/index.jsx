import '../../../index.css'
import { Button as Btn } from "./style";

const Button = ({size, color, children})=>{
	return(
		<Btn size={size} color={color}>{children}</Btn>
	)
}

export default Button
