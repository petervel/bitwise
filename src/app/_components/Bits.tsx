"use client";

import { useState } from "react";
import Bit from "./Bit";
import css from "./Bits.module.css";

type BitsProps = {
	bitCount: number;
};
const Bits = (props: BitsProps) => {
	const { bitCount } = props;
	const bits = [...Array(bitCount)].map((_, n) => n).reverse();

	const [value, setValue] = useState(5);

	const getMask = (n: number) => 1 << n;
	const getBit = (n: number) => (value & getMask(n)) != 0;
	const setBit = (n: number, val: boolean) => {
		console.log(n, val);
		const mask = getMask(n);
		setValue((v) => (v & ~mask) | (val ? mask : 0));
	};

	return (
		<div>
			value: {value}
			<div className={css.bits}>
				{bits.map((n) => (
					<Bit key={n} value={getBit(n)} setValue={(v) => setBit(n, v)} />
				))}
			</div>
		</div>
	);
};

export default Bits;
