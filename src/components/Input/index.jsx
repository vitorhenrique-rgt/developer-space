import { Input as Ipt, Icon } from "./style";

function Input({placeholder, icon, side, type}) {
	return (
		<div className='relative'>
			<Ipt type={type} placeholder={placeholder} side ={side}></Ipt>
			<Icon className="material-symbols-rounded" side ={side}>{icon}</Icon>
		</div>
	);
}

export default Input;
