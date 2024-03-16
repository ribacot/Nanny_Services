import { Container } from "../../components/ui/container/container";

export default function Home() {
	return (
		<section className="h-[800px] p-[32px]">
				<div className="flex h-full w-full rounded-[30px] overflow-hidden">
					<div className=" w-1/2 bg-blue">
						<div className=" mt-[283px] ml-[128px]">
							<h1>
								Make Life Easier
								<br /> for the Family:
							</h1>
						</div>
					</div>
					<div className="w-1/2 bg-red-400"></div>
				</div>
		</section>
	);
}
