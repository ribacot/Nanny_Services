import { Link } from "react-router-dom";
import BtnAuth from "../ui/BtnAuth";

export default function AuthNav({ onClick = null }) {
	return (
		<div className="flex gap-[8px]">
			<BtnAuth onClick={() => onClick(false)}>Log in</BtnAuth>
			<BtnAuth onClick={() => onClick(false)}>Registration</BtnAuth>
		</div>
	);
}
