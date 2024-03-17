export default function BtnAuth({ children, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-[40px] py-[14px] border-solid rounded-[30px] ${
				children === "Registration" ? " bg-blue" : "border-solid border-[1px] border-white"
			} text-white`}
		>
			{children}
		</button>
	);
}
