import { Link } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";

export default function Navigation({ links, className, onClick = null }) {
	return (
		<div className="flex justify-between">
			<ul className={`${className} `}>
				{links.map(({ name, href }) => (
					<li key={name}>
						<Link
							href={href}
							onClick={() => onClick(false)}
							className="text-sm font-semibold leading-6"
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
