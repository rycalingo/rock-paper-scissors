import { useState } from "react";
import { useOptions } from "../context/optionsContext";
import { OptionActionKind } from "../reducers/scoreReducerTypes";
import styles from "./HandSelection.module.css";

interface Props {
	name: string;
	icon: JSX.Element;
	handChoiceIndex: number;
}

const HandSelection = ({ name, icon, handChoiceIndex }: Props) => {
	const [handPressed, setHandPressed] = useState<boolean>(false);
	const optionsContext = useOptions();

	const { dispatch, state } = optionsContext;

	const selectedHandIndex = state.playerHand;

	const selectOption = (index: number) => {
		dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index });
		setHandPressed(true);
	};

	return (
		<>
			<button className={`${styles.choiceBtn} ${handPressed && handChoiceIndex === selectedHandIndex ? styles.activeChoice : ""}`} onClick={() => selectOption(handChoiceIndex)}>
				{`${name} `} {icon}
			</button>
		</>
	);
};

export default HandSelection;
