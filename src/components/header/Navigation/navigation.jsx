import { NavLink, useLocation } from "react-router-dom";
import AuthNav from "../../AuthNav/AuthNav";
import "./Navigation.css";

export default function Navigation({ links, className, onClick = null, isAthorized }) {
	const location=useLocation()
	return (
		<div className="linkNav justify-between hidden xl:flex w-full  ">
			<ul className={`${className} flex gap-[40px] items-center`}>
				{links.map(({ name, href }) => (
					<li key={name}>
						<NavLink
							to={href} state={{ from: location }}
							onClick={() => onClick(false)}
							className={`${
								!isAthorized & (href === "/favorites") ? "hidden" : " "
							} `}
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
