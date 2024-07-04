"use client";

import { useEffect, useState } from "react";
import Bits from "./Bits";
import ResultValue, { ValueType } from "./ResultValue";
import TypeSwitcher from "./TypeSwitcher";
import css from "./Calculator.module.css";
import { useKeyboardShortcut } from "./_hooks/useKeyboard";

const Calculator = () => {
	const bitCount = 8;
	const [value, setValue] = useState(0);
	const [valueType, setValueType] = useState(ValueType.Hexadecimal);

	useEffect(() => {
		setValue(Math.floor(Math.random() * 256));
	}, []);

	const bound = (val: number) => {
		let min = 0;
		let max = 255;
		if (valueType == ValueType.Unsigned) {
			min = -128;
			max = 127;
		}
		return Math.min(Math.max(val, min), max);
	};

	useKeyboardShortcut(
		"ArrowUp",
		() => {
			setValue((v) => bound(v + 1));
		},
		[valueType]
	);
	useKeyboardShortcut(
		"ArrowDown",
		() => {
			setValue((v) => bound(v - 1));
		},
		[valueType]
	);

	return (
		<div className={css.calculator}>
			<Bits {...{ bitCount, value, setValue }} />
			<div className={css.description}>
				If you read this as a <TypeSwitcher {...{ valueType, setValueType }} />{" "}
				value...
			</div>
			<div className={css.description}>
				Its value would be <ResultValue {...{ bitCount, value, valueType }} />
			</div>
		</div>
	);
};

export default Calculator;
