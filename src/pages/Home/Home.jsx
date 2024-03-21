import { NavLink } from "react-router-dom";
import { Container } from "../../components/ui/container/container";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import style from "./Home.module.css";

export default function Home() {
	return (
		<section className=" xl:h-[800px] xl:p-[32px]">
			<div className="flex h-full w-full xl:rounded-[30px] xl:overflow-hidden">

				<div className=" hidden xl:block w-1/2 bg-blue">
					<div className=" mt-[251px] ml-[96px] text-white">
						<h1 className=" pb-[28px]">
							Make Life Easier
							<br /> for the Family:
						</h1>
						<p className={`${style.slogan} pb-[64px]`}>
							Find Babysitters Online for All Occasions
						</p>

						<NavLink
							to="/nannies"
							className={`btn flex gap-[18px] max-w-fit items-center `}
						>
							<span>Get started</span>
							<div className="w-[18px] h-[18px]">
								<ArrowUpRightIcon className=" " />
							</div>
						</NavLink>
					</div>
				</div>

				<div className={`w-full xl:w-1/2 heroBg bg-fixed xl:bg-local px-[15px] md:px-[100px] xl:px-[128px]]`}>
					<div className=" mt-[150px] pb-[20px]  text-white xl:hidden">
						<h1 className=" pb-[28px]">
							Make Life Easier
							<br /> for the Family:
						</h1>
						<p className={`${style.slogan} pb-[64px]`}>
							Find Babysitters Online for All Occasions
						</p>

						<NavLink
							to="/nannies"
							className={`btn flex gap-[18px] max-w-fit items-center `}
						>
							<span>Get started</span>
							<div className="w-[18px] h-[18px]">
								<ArrowUpRightIcon className=" " />
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
}
