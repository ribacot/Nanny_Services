import { Dialog } from "@headlessui/react";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function MobileMenu({ onClick, isOpen, links }) {
	return (
		<Dialog as="div" className="lg:hidden " open={isOpen} onClose={onClick}>
			<div className="fixed inset-0 z-50 ">
				<Dialog.Backdrop className="text-w">
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue text-white px-[15px] py-[20px] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

						<nav className={`flex flex-col gap-[40px] w-full h-full`} aria-label="Global">
							<div className="flex w-full justify-between ">
								<NavLink to="/" className="logo">
									<span className="sr-only">Your Company</span>
									Nanny.Services
								</NavLink>
								<button
									type="button"
									className="flex items-center justify-center rounded-md  text-white xl:hidden"
									onClick={() => onClick(false)}
								>
									<XMarkIcon className=" fill-white w-[32px] h-[32px]" />
								</button>
							</div>

							<Navigation
								isAthorized={false}
								links={links}
								onClick={() => onClick(false)}
								className=" flex flex-col h-full justify-between"
								className1=""
							/>
						</nav>
					</Dialog.Panel>
				</Dialog.Backdrop>
			</div>
		</Dialog>
	);
}
