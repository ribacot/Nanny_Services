import {BtnAuth} from "../ui/BtnAuth";

export function AuthNav({ onClick = null }) {
	return (
		<div className="flex flex-col xl:flex-row gap-[4px] xl:gap-[8px] authNavBtn">
			<BtnAuth onClick={() => onClick(false)}>Log in</BtnAuth>
			<BtnAuth onClick={() => onClick(false)}>Registration</BtnAuth>
		</div>
	);
}
