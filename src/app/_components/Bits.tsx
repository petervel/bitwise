import { Dispatch, SetStateAction } from "react";
import Bit from "./Bit";
import css from "./Bits.module.css";
import { ValueType } from "./Value";

type BitsProps = {
	bitCount: number;
	setValue: Dispatch<SetStateAction<number>>;
	value: number;
};
const Bits = (props: BitsProps) => {
	const { bitCount, setValue, value } = props;

	const getBit = (n: number) => (value & (1 << n)) != 0;
	const setBit = (n: number, val: boolean) => {
		const mask = 1 << n;
		setValue((v) => (v & ~mask) | (val ? mask : 0));
	};

	const bits = [...Array(bitCount)].map((_, n) => n).reverse();
	return (
		<div className={css.bits}>
			{bits.map((n) => (
				<Bit key={n} value={getBit(n)} setValue={(v) => setBit(n, v)} />
			))}
		</div>
	);
};

export default Bits;
