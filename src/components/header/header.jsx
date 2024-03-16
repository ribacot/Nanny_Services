import { useState } from "react";
import Navigation from "./Navigation/navigation";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu/mobileMenu";
import { Container } from "../ui/container/container";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react@heroicons/react/24/outline'

const navigationLinks = [
	{ name: "Home", href: "/" },
	{ name: "Nannies", href: "/nannies" },
	{ name: "Favorites", href: "/favorites" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const location = useLocation();
	const pathPage = location.pathname;

	return (
		<header
			className={`${pathPage === "/" ? " fixed w-full pt-[52px] pb-[20px] border-solid border-[1px] border-rgba(251, 251, 251, 0.4)" : "py-[20px]"} text-white`}
		>
			<Container>
				<nav className="flex items-center gap-[305px]" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							Nanny.Services
						</Link>
					</div>
					<div className="flex md:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>X
						</button>
					</div>
					<Navigation
						links={navigationLinks}
						onClick={() => setMobileMenuOpen(false)}
						className=""
					/>
				</nav>
			</Container>

			<MobileMenu
				onClick={setMobileMenuOpen}
				isOpen={mobileMenuOpen}
				links={navigationLinks}
			/>
		</header>
	);
}
