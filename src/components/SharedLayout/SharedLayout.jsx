import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

export default function SharedLayout() {
	return (
		<>
			<Header/>
			<main>
				<Suspense fallback={<h1>Load...</h1>}>{<Outlet />}</Suspense>
			</main>
		</>
	);
}
