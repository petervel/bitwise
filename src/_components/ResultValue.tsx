import classNames from "classnames";
import css from "./ResultValue.module.css";

export enum ValueType {
	Hexadecimal = "Hexadecimal",
	Signed = "Signed",
	String = "String",
	Unsigned = "Unsigned",
}

type ResultValueProps = {
	bitCount: number;
	value: number;
	valueType: ValueType;
};
const ResultValue = (props: ResultValueProps) => {
	const { bitCount, value, valueType } = props;

	const getValue = () => {
		switch (valueType) {
			case ValueType.String:
				return `"${String.fromCharCode(value)}" (HEX: 0x${value
					.toString(16)
					.toUpperCase()})`;
			case ValueType.Hexadecimal:
				return `0x${value.toString(16).toUpperCase()}`;
			case ValueType.Unsigned:
				return value;
			case ValueType.Signed:
				const mask = 1 << (bitCount - 1);
				console.log(value, value & mask);
				return value - (value & mask ? mask << 1 : 0);
			default:
				return value;
		}
	};

	const classes = classNames("Value", css.value, "result-value");
	return <span className={classes}>{getValue()}</span>;
};

export default ResultValue;
