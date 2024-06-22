import { Dispatch, SetStateAction } from "react";
import { ValueType } from "./ResultValue";
import css from "./TypeSwitcher.module.css";
import classNames from "classnames";

type TypeSwitcherProps = {
	valueType: ValueType;
	setValueType: Dispatch<SetStateAction<ValueType>>;
};
const TypeSwitcher = (props: TypeSwitcherProps) => {
	const { valueType, setValueType } = props;

	const nextType = () => {
		setValueType((current: ValueType) => {
			switch (current) {
				case ValueType.Hexadecimal:
					return ValueType.Signed;
				case ValueType.Unsigned:
					return ValueType.Signed;
				case ValueType.Signed:
					return ValueType.String;
				case ValueType.String:
					return ValueType.Hexadecimal;
			}
		});
	};

	const classes = classNames(
		"TypeSwitcher",
		css.typeSwitcher,
		"changeable-value"
	);
	return (
		<span className={classes} onClick={() => nextType()}>
			{valueType}
		</span>
	);
};

export default TypeSwitcher;
