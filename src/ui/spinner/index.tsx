export function Spinner() {
	return (
		<div className="shadow-base relative mx-auto flex size-[42px] items-center justify-center rounded-full bg-white">
			<div className="border-t-brand absolute inset-0 animate-spin rounded-full border-[3px] border-transparent"></div>
		</div>
	);
}

export default Spinner;
