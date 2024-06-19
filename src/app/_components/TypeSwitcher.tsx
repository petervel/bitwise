import { Dispatch, SetStateAction } from "react";
import { ValueType } from "./Value";

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
				case ValueType.Signed:
					return ValueType.String;
				case ValueType.String:
					return ValueType.Unsigned;
				case ValueType.Unsigned:
					return ValueType.Hexadecimal;
			}
		});
	};

	return <div onClick={() => nextType()}>{valueType}</div>;
};

export default TypeSwitcher;
