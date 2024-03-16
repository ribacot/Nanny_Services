import { Link } from "react-router-dom";

export default function AuthNav({onClick=null}) {
	return (
		<div>
			<Link
				href={"/login"}
				onClick={() => onClick(false)}
				className="text-sm font-semibold leading-6"
			>Login</Link>
			<Link
				href={"/register"}
				onClick={() => onClick(false)}
				className="text-sm font-semibold leading-6"
			>Registration</Link>
		</div>
	);
}
