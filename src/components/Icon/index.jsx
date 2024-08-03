import { IconElement } from "./style";

const Icon = ({color, size, side, children})=>{
	return (
	<IconElement  size={size} color={color} side ={side} className="material-symbols-rounded">{children}</IconElement>
)}
export default Icon
