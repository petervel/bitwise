import css from "./Bit.module.css";

type BitProps = {
	value: boolean;
	setValue: (v: boolean) => void;
};
const Bit = (props: BitProps) => {
	const { value, setValue } = props;
	return (
		<div className={css.bit} onClick={() => setValue(!value)}>
			{value ? 1 : 0}
		</div>
	);
};

export default Bit;
