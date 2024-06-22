"use client";

import { useState } from "react";
import Bits from "./Bits";
import Value, { ValueType } from "./Value";
import TypeSwitcher from "./TypeSwitcher";
import css from "./Calculator.module.css";

const Calculator = () => {
	const bitCount = 8;
	const [value, setValue] = useState(5);
	const [valueType, setValueType] = useState(ValueType.Hexadecimal);

	return (
		<div className={css.calculator}>
			<Bits {...{ bitCount, value, setValue }} />
			<div className={css.description}>
				If you read this as a <TypeSwitcher {...{ valueType, setValueType }} />{" "}
				value...
			</div>
			<div className={css.description}>
				Its value would be <Value {...{ bitCount, value, valueType }} />
			</div>
		</div>
	);
};

export default Calculator;
