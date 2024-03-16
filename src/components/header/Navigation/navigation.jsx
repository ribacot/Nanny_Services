import { Link } from "react-router-dom";
import AuthNav from "../../AuthNav/AuthNav";

export default function Navigation({ links, className, onClick = null }) {
	return (
		<div className="justify-between hidden xl:flex w-full ">
			<ul className={`${className} flex gap-[40px] items-center`}>
				{links.map(({ name, href }) => (
					<li key={name}>
						<Link
							href={href}
							onClick={() => onClick(false)}
							className="flex text-sm font-semibold  "
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
			<AuthNav />
		</div>
	);
}
