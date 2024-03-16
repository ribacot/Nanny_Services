import { useState } from "react";
import Navigation from "../Navigation/navigation";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/mobileMenu";
import { Container } from "../ui/container/container";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react@heroicons/react/24/outline'

const navigationLinks = [
	{ name: "Home", href: "/" },
	{ name: "Nannies", href: "/nannies" },
	{ name: "Favorites", href: "/favorites" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="py-[20px] ">
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
						className="hidden md:flex md:gap-[40px]"
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
