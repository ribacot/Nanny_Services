import { Suspense } from "react";
import { Outlet } from "react-router";
export function SharedLayout() {
	return (
		<>
			<main>
				<Suspense fallback={<h1>Loading...</h1>}>{<Outlet />}</Suspense>
			</main>
		</>
	);
}
