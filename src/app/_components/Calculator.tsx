"use client";

import { useState } from "react";
import Bits from "./Bits";
import Value, { ValueType } from "./Value";
import TypeSwitcher from "./TypeSwitcher";

const Calculator = () => {
	const bitCount = 8;
	const [value, setValue] = useState(5);
	const [valueType, setValueType] = useState(ValueType.Hexadecimal);

	return (
		<div>
			<Value {...{ bitCount, value, valueType }} />
			<Bits {...{ bitCount, value, setValue }} />
			<TypeSwitcher {...{ valueType, setValueType }} />
		</div>
	);
};

export default Calculator;
