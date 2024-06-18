"use client";

import { useState } from "react";
import Bit from "./Bit";
import css from "./Bits.module.css";

enum ValueType {
	Hexadecimal = "Hexadecimal",
	Signed = "Signed",
	String = "String",
	Unsigned = "Unsigned",
}

type BitsProps = {
	bitCount: number;
};
const Bits = (props: BitsProps) => {
	const { bitCount } = props;

	const [value, setValue] = useState(5);

	const getBit = (n: number) => (value & (1 << n)) != 0;
	const setBit = (n: number, val: boolean) => {
		const mask = 1 << n;
		setValue((v) => (v & ~mask) | (val ? mask : 0));
	};

	const [valueType, setValueType] = useState(ValueType.Hexadecimal);
	const nextType = () => {
		setValueType((current) => {
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

	const bits = [...Array(bitCount)].map((_, n) => n).reverse();
	return (
		<div>
			<div>Value: {getValue()}</div>
			<div className={css.bits}>
				{bits.map((n) => (
					<Bit key={n} value={getBit(n)} setValue={(v) => setBit(n, v)} />
				))}
			</div>
			<div onClick={() => nextType()}>{valueType}</div>
		</div>
	);
};

export default Bits;
