import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Container } from "../ui/container/container";
import { createPortal } from "react-dom";
import Modal from "../../Modal/Modal";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "./Navigation/Navigation";

const navigationLinks = [
	{ name: "Home", href: "/" },
	{ name: "Nannies", href: "/nannies" },
	{ name: "Favorites", href: "/favorites" },
];

const isAthorized = false;
const modalRoot = document.querySelector("#modal");

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const location = useLocation();
	const pathPage = location.pathname;

	return (
		<>
			<header
				className={`${
					pathPage === "/"
						? " absolute w-full xl:pt-[52px] py-[20px] border-solid border-b-[1px] border-borderColor"
						: "py-[20px]  bg-blue"
				} text-white px-[15px] md:px-[100px] xl:px-[128px]`}
			>
					<nav
						className={`flex items-center justify-between mdOnly:justify-between ${
							isAthorized ? "xl:gap-[305px]" : "xl:gap-[487px]"
						}`}
						aria-label="Global"
					>
						<div className="flex lg:flex-1">
							<NavLink to="/" className="logo">
								<span className="sr-only">Nanny.Services</span>
								Nanny.Services
							</NavLink>
						</div>
						<Navigation
							isAthorized={isAthorized}
							links={navigationLinks}
							onClick={() => setMobileMenuOpen(false)}
							className="hidden xl:flex w-full justify-between"
							className1="flex gap-[40px] items-center"
						/>
						<div>						<button
							type="button"
							className="flex items-center justify-center rounded-md  text-white xl:hidden"
							onClick={() => setMobileMenuOpen(true)}
						>
							{!mobileMenuOpen ? (
								<Bars3Icon className=" fill-white w-[32px] h-[32px]" />
							) : null}
						</button>
						<span className="sr-only">Open main menu</span>
</div>
					</nav>

				<MobileMenu
					onClick={setMobileMenuOpen}
					isOpen={mobileMenuOpen}
					links={navigationLinks}
				/>
			</header>
		</>
	);
}
