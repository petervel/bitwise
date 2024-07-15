import { Dispatch, SetStateAction } from "react";
import Bit from "./Bit";
import css from "./Bits.module.css";

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
    <div className={css.computer}>
      <div className={css.hint}>What your computer sees:</div>
      <div className={css.bits}>
        {bits.map((n) => (
          <div key={n} className={css.bitContainer}>
            <div className={css.bitId}>{n}</div>
            <Bit value={getBit(n)} setValue={(v) => setBit(n, v)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bits;
