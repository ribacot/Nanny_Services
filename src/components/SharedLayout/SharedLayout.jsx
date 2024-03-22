import { Suspense } from "react";
import { Outlet } from "react-router";
import Heade from "../header/header";
export default function SharedLayout() {
	return (
		<>
		<Heade/>
		<main>
				<Suspense fallback={<h1>Load...</h1>}>{<Outlet />}</Suspense>
			</main>
		</>
	);
}
