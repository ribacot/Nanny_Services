export default function BtnAuth({ children, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-[40px] py-[14px] border-solid rounded-[30px] ${
				children === "Registration" ? " bg-blue" : ""
			} text-white`}
		>
			{children}
		</button>
	);
}
