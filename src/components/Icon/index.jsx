import { IconElement } from "./style";

const Icon = ({color, size, side, name})=>{
	return (
	<IconElement  size={size} color={color} side ={side} className="material-symbols-rounded">{name}</IconElement>
)}
export default Icon
