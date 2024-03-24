export function BtnAuth({ children, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`btn text-white ${
				children === "Registration" ? " bg-blue border-none" : ""
			}`}
		>
			{children}
		</button>
	);
}
