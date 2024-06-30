import { ContainerInput, InputContent } from "./style";

function Input(props) {
	return (
		<ContainerInput side={props.side}>
			<InputContent side={props.side} placeholder={props.info}></InputContent>
			<span className="material-symbols-rounded">{props.inputType}</span>
		</ContainerInput>
	);
}

export default Input;
