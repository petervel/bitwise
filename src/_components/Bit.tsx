import { AnimatedCounter } from "react-animated-counter";
import css from "./Bit.module.css";
import classNames from "classnames";

type BitProps = {
  value: boolean;
  setValue: (v: boolean) => void;
};
const Bit = (props: BitProps) => {
  const { value, setValue } = props;
  const classes = classNames("Bit", css.bit, "changeable-value");

  return (
    <div className={classes} onClick={() => setValue(!value)}>
      <AnimatedCounter
        decrementColor="unset"
        incrementColor="unset"
        includeDecimals={false}
        fontSize="24pt"
        value={value ? 1 : 0}
      />
    </div>
  );
};

export default Bit;
