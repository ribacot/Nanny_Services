import { NavLink } from "react-router-dom";
import { Container } from "../../components/ui/container/container";
import { ArrowUpRightIcon}from '@heroicons/react/16/solid'
import style from "./Home.module.css";

export default function Home() {
	return (
		<section className="h-[800px] p-[32px]">
			<div className="flex h-full w-full rounded-[30px] overflow-hidden">
				<div className=" w-1/2 bg-blue">
					<div className=" mt-[251px] ml-[96px] ">
						<h1 className=" pb-[28px]">
							Make Life Easier
							<br /> for the Family:
						</h1>
						<p className={`${style.slogan} pb-[64px]`}>
							Find Babysitters Online for All Occasions
						</p>

						<NavLink to="/nannies" className={`flex gap-[18px]`}>
							<span>Get started</span><div className="w-[16px] h-[16px]"><ArrowUpRightIcon className=" "/></div>
						</NavLink>
					</div>
				</div>
				<div className={`w-1/2 heroBg`}> </div>
			</div>
		</section>
	);
}
