import { NavLink, useLocation } from "react-router-dom";
import {AuthNav} from "../../AuthNav/AuthNav";
import "./Navigation.css";

export function Navigation({
	links,
	className,
	className1 = "",
	onClick = null,
	isAthorized,
}) {
	const location = useLocation();
	return (
		<div className={`${className}`}>
			<ul className={`${className1} `}>
				{links.map(({ name, href }) => (
					<li key={name}>
						<NavLink
							to={href}
							state={{ from: location }}
							onClick={() => onClick(false)}
							className={`${!isAthorized & (href === "/favorites") ? "hidden" : " "} `}
						>
							{name}
						</NavLink>
					</li>
				))}
			</ul>
			<AuthNav />
		</div>
	);
}
