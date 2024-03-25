import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";
export function SharedLayout() {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<h1>Loading...</h1>}>{<Outlet />}</Suspense>
			</main>
		</>
	);
}
