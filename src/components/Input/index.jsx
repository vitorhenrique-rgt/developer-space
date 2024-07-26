import { ContainerInput, InputContent } from "./style";

function Input(props) {
	return (
		<ContainerInput $iconSide={props.iconSide}>
			<InputContent type={props.inputType} $iconSide={props.iconSide} placeholder={props.info}></InputContent>
			<span className="material-symbols-rounded">{props.iconType}</span>
		</ContainerInput>
	);
}

export default Input;
